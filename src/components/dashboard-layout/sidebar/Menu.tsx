import styles from './Sidebar.module.scss'
import { MENU } from './menu.data'
import { MenuItem } from './MenuItem'
import { LogoutButton } from './LogoutButton'

export function Menu() {
	return (
		<nav className={styles.menu}>
			{MENU.map(item => (
				<MenuItem item={item} key={item.link} />
			))}
			<div className={styles.logout}>
				<LogoutButton/>
			</div>
		</nav>
	)
}