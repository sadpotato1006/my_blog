function normalizePath(pathname: string): string {
	return pathname.replace(/\/+$/, "") || "/";
}

/** Match internal navigation sections while ignoring query strings and hashes. */
export function isNavLinkActive(href: string, currentUrl: URL): boolean {
	if (!href || href.startsWith("#")) return false;

	let target: URL;
	try {
		target = new URL(href, currentUrl);
	} catch {
		return false;
	}
	if (!/^https?:$/.test(target.protocol) || target.origin !== currentUrl.origin) {
		return false;
	}

	const targetPath = normalizePath(target.pathname);
	const currentPath = normalizePath(currentUrl.pathname);
	if (targetPath === currentPath) return true;
	if (targetPath === "/") return /^\/\d+$/.test(currentPath);
	return currentPath.startsWith(`${targetPath}/`);
}

/** The navbar persists across Swup visits, so refresh its current-page state. */
export function updateActiveNavLinks(): void {
	const navbar = document.getElementById("navbar");
	if (!navbar) return;
	const currentUrl = new URL(window.location.href);

	navbar.querySelectorAll<HTMLAnchorElement>("a[data-nav-link]").forEach((link) => {
		if (isNavLinkActive(link.href, currentUrl)) {
			link.setAttribute("aria-current", "page");
		} else {
			link.removeAttribute("aria-current");
		}
	});

	navbar.querySelectorAll<HTMLElement>("[data-nav-group]").forEach((group) => {
		const parent = group.querySelector<HTMLElement>("[data-nav-parent]");
		parent?.toggleAttribute(
			"data-nav-active",
			!!group.querySelector('a[data-nav-link][aria-current="page"]'),
		);
	});
}
