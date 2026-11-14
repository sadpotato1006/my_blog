import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isNavLinkActive } from "../src/utils/nav-active.ts";

const at = (path: string) => new URL(path, "https://blog.example");

describe("current navigation item", () => {
	it("selects only the matching menu item", () => {
		for (const current of ["/", "/archive/", "/aboutme/"]) {
			for (const item of ["/", "/archive/", "/aboutme/"]) {
				assert.equal(isNavLinkActive(item, at(current)), item === current);
			}
		}
	});

	it("keeps archive selected for filters and trailing-slash variants", () => {
		assert.equal(isNavLinkActive("/archive/", at("/archive?tag=Astro#2026")), true);
	});

	it("keeps Home selected on its paginated pages", () => {
		assert.equal(isNavLinkActive("/", at("/2/")), true);
		assert.equal(isNavLinkActive("/", at("/aboutme/")), false);
	});

	it("matches descendants without confusing similar route names", () => {
		assert.equal(isNavLinkActive("/albums/", at("/albums/travel/")), true);
		assert.equal(isNavLinkActive("/about/", at("/aboutme/")), false);
	});

	it("ignores external links, email links, and placeholder anchors", () => {
		for (const href of ["https://github.com/", "mailto:me@example.com", "#", "", "http://["]) {
			assert.equal(isNavLinkActive(href, at("/")), false);
		}
	});
});
