import type { Alpine } from 'alpinejs';
import { hexMD5 } from './md5.js';

export default (Alpine: Alpine) => {
	Alpine.data('hsLogin', () => ({
		username: '',
		password: '',
		chapChallenge: '',
		chapId: '',
		error: '',
		mac: '',
		trial: false,
		useVoucher: true,

		init() {
			this.username = this.getValue('username') || '';
			this.chapChallenge = this.getValue('chapChallenge') || '';
			this.chapId = this.getValue('chapId') || '';
			this.error = this.getValue('error') || '';
			this.mac = this.getValue('mac') || '';
			this.trial = 'yes' === this.getValue('trial');
		},

		getValue(key: string) {
			const data = this.$root.dataset;

			if (!data[key] || (data[key].startsWith('$(') && data[key].endsWith(')'))) {
				return null;
			}

			return data[key];
		},

		getString(value: string) {
			const parts = value.split('\\').filter(Boolean);
			const characters = parts.map((octal) => String.fromCharCode(parseInt(octal, 8)));

			return characters.join('');
		},

		processLogin() {
			if (this.useVoucher) {
				this.password = this.username;
			}

			if (this.chapId) {
				const chapId = this.getString(this.chapId);
				const chapChallenge = this.getString(this.chapChallenge);

				this.password = hexMD5(`${chapId}${this.password}${chapChallenge}`);
			}
		},
	}));
};
