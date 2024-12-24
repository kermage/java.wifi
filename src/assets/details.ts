import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
	Alpine.data('hsDetails', () => ({
		session: '',
		user: '',

		init() {
			const username = this.getValue('username') || '';
			const loginBy = this.getValue('loginBy') || '';

			this.user = 'trial' === loginBy ? `Trial User` : username;
			this.session = this.getValue('session') || '';
		},

		getValue(key: string) {
			const data = this.$root.dataset;

			if (!data[key] || (data[key].startsWith('$(') && data[key].endsWith(')'))) {
				return null;
			}

			return data[key];
		},
	}));
};
