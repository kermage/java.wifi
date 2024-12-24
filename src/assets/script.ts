import type { Alpine } from 'alpinejs';
import detailsComponent from './details';
import loginComponent from './login';

export default (Alpine: Alpine) => {
	loginComponent(Alpine);
	detailsComponent(Alpine);
};
