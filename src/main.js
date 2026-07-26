// Please, beware skidding without understanding the concept.
// Here, is the basement of machinery, stepping into it.
// @Todo: Finally, begin development (Mon, Jun 22)




// Never underestimate my power!
"use strict";

// Notice (Loziya-included): Recycled code snippets from an unreleased library.

// *** Polyfills A.G.: Backward compatibility supported, works even on: Android 7 (Nougat)
// Tip: Negative integers can be used as descending indexes.
if (! ("at" in [])) Object.defineProperty(Array.prototype, "at", {
	"value": function (index) {
		if (index < 0) index += this.length;
		return this[index];
	},
	"writable": true,
	"configurable": true
});

// Tip: URL validity checker.
if (! ("canParse" in URL)) URL.canParse = (url, base) => {
	try {
		new URL(url, base);
		return true;
	} catch {
		// Hate bad blocks, still.
		return false;
	};
};

// *** Helpers: Injected, those are sustainable, easy-to-use and bug proof.
// Tip: HTML coordinated DOM selector.
Object.assign(document, {
	"indexRoot": null,
	"getElementByOrderedIndex": function (...sequence) {
		let container = this.indexRoot, currentChild;

		if (! (container instanceof Element)) throw new TypeError("Invalid root: expected standard element, but got: " + getType(container));
		return sequence.reduce((content, index) => {
			// Now it can even grab the last one.
			// News: Removed legacy allowlist.
			currentChild = content.children;

			if (index < 0 || index >= currentChild.length) throw new RangeError("Indexing is out of bounds, faulty argument: " + index);
			return currentChild[index];
		}, container);
	}
});

// Tip: Very accurate, variable type checker.
function getType(value) {
	// Successor of its ancestors.
	return Object.prototype.toString.call(value).slice(8, -1);
};

// Tip: Link verifier + auto-correct feature.
function normalizeURI(uri, realpath = "") {
	if (typeof uri !== "string" || ! uri) return "";

	// Convert unsafe backslashes to forward slashes.
	uri = uri.split(/([?#].*)/).map((part, index) => index === 0 ? part.replace(/\\/g, "/") : part).join("");

	// Something allowed, others denied according to available supports.
	const schemes = ["about", "data", "javascript"], protocols = ["file", "http", "https"];

	// Special schemes will pass through.
	if (schemes.some(item => uri.toLowerCase().startsWith(item + ":"))) return uri.split(":")[1] ? uri : "";

	// Handle Windows drive letters with Linux filesystem structure, thanks later.
	if (uri.startsWith("/") || /^[a-zA-Z]:\//.test(uri)) uri = "file:///" + uri.replace(/^\/+/, "");

	// Look for existing protocol, or concatenate that legacy one.
	if (! protocols.includes(uri.match(/^([a-z][a-z0-9+.-]*):\/\//i)?.[1].toLowerCase())) uri = "https://" + uri;

	try {
		// The ultimate solution.
		const property = new URL(uri), [, pathname, query, hash] = realpath.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

		if (/^(?!.*\.\.)[a-zA-Z0-9\-._~!$&'()*+,;=:@%\/]+$/.test(pathname)) property.pathname += (! (property.pathname.endsWith("/") || realpath.startsWith("/")) ? "/" : "") + pathname;
		if (query) property.search = query;
		if (hash) property.hash =  hash;
		return property.href;
	} catch {
		// No normal text traversal should survive.
		return "";
	};
};



// Keep your room clean.
(() => {
	// Capture exact photocopy of all required items.
	const exports = {
		"domCache": {
			"isDefined": false,
			"menuBtn": document.querySelector("span.icon.menu[action='toggle-sidebar']")
		},
		"packageId": (() => {
			// Build folder path, then cut out the name of target.
			const parts = document.currentScript.src.split("/");

			// Pack up to take our newly cooked hot equipment.
			return parts.at(parts.indexOf("plugins") + 1);
		})(),
		"totalTabs": new Proxy(new Map(), {
			get(target, operation, receiver) {
				// We need your interactions here:
				const boundMethods = ["clear", "delete", "set"];

				// What is dangerous here, huh?
				// We wanna intercept you all:
				if (boundMethods.includes(operation)) return (...args) => {
					// Act hot.
					Map.prototype[operation].apply(target, args);

					// A-Memorize!
					exports.recentTabs.access([...target.keys()]);

					// Grant for chaining.
					return receiver;
				};

				// Fix: Handle getters specifically.
				if (operation === "size") return target.size;

				// Others should be triggered originally.
				const value = Reflect.get(target, operation, receiver);

				// If it's a method, connect it to mainline.
				if (typeof value === "function") return value.bind(target);
				return value;
			}
		})
	},

	// Better to perform shortcut binding, will provide design agility.
	Sidebar = acode.require("sidebarApps"), Toast = acode.require("toast"),

	// We must preserve your progress safely.
	_config = acode.require("settings"),

	// Magic words to write database in disk space.
	_save = section => _config.update({
		// It'll accomplish mission silently.
		[exports.packageId]: section
	}, false),

	// Watcher for menu toggles.
	_interactionWatcher = () => setTimeout(() => document.querySelector(exports.toolAttrs).classList.contains("active") && updateControlStates());

	// *** Removed: Watcher which rises heavy process usage.

	// Hijacking plan cancelled, activating beast mode.
	// Get a tasty fork...
	URL.join = (that => that.join.bind(that))(acode.require("Url"));

	// The evolution counterpart...
	function $config(key, isPersistent = false) {
		// Punish if user mess with normal operations.
		if (typeof key !== "string" || ! key) throw new Error("Subject must be valid with plain text.");

		// Take a reference if possible.
		let section = _config.value[exports.packageId];

		// Didn't find yourself? Feel free to reserve a seat.
		if (getType(section) !== "Object") section = _config.value[exports.packageId] = {};

		// Persistent scoped helpers that'll handover my personal assistant.
		return {
			"access": (value, afterSave, ...args) => {
				// Gather old things.
				const content = isPersistent ? section[key] : localStorage.getItem(key);

				// Replace the target selection when needed.
				if (typeof value !== "undefined") {
					// Tip: Brat protection armor equipped.
					if (! (["Array", "Boolean", "Null", "Object", "String"].includes(getType(value)) || Number.isFinite(value))) value = null;
					if (isPersistent) {
						// Push into it.
						section[key] = value;

						// Z-Memorize!
						_save(section);
					} else localStorage.setItem(key, JSON.stringify(value));

					// Callback when someone asks for.
					if (typeof afterSave === "function") afterSave.apply(null, args);
				};

				// Sure?
				if (typeof content === "undefined" || (! isPersistent && typeof content === "object")) return;

				// Hey, send it.
				return isPersistent ? content : JSON.parse(content);
			},
			"purge": () => {
				if (! isPersistent) return localStorage.removeItem(key);
				if (section.hasOwnProperty(key)) {
					delete section[key];
					_save(section);
				};
			}
		};
	};

	// Written for adding tabs.
	function createTab(title, link) {
		// Create brand new product.
		const Viewer = document.createElement("iframe"), redirectorBlueprint = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");

		// Sew a personal diary for marking already visited links.
		Viewer.browsingHistory = Object.assign([link], {
			"navigate": function (action) {
				this.guidedRedirection = true;

				if (action === "back" && this.currentIndex > 0) -- this.currentIndex;
				if (action === "forward" && this.currentIndex < this.length - 1) ++ this.currentIndex;
				if (action !== "reload") console.info("Navigation boundary reached in that direction, don't try to go further.");

				Viewer.src = (src => action === "reload" ? (bust => bust + (bust.includes("?") ? "&" : "?") + "t=" + Date.now())(src.replace(/([?&])t=\d+/g, "").replace(/[?&]$/, "")) : src)(this[this.currentIndex]);
			},
			"currentIndex": 0,
			"guidedRedirection": true
		});

		// Mutate its infrastructure for detecting link elevations.
		Object.defineProperty(Viewer, "src", {
			get() {
				return redirectorBlueprint.get.call(this);
			},
			set(src) {
				redirectorBlueprint.set.call(this, src);

				if (this.browsingHistory.guidedRedirection) this.browsingHistory.guidedRedirection = false;
				else {
					for (let n = this.browsingHistory.length - 1; n > this.browsingHistory.currentIndex; n--) this.browsingHistory.pop();

					this.browsingHistory.push(src);
					++ this.browsingHistory.currentIndex;
				};
			}
		});

		// Give illegal birth to dummy "New File" tab handle.
		acode.newEditorFile(title, {
			"editable": false, // Prevents the keyboard from popping up.
			"hideQuickTools": true
		});

		// Configure necessary options.
		Viewer.allow = `
			ch-ua-full-version-list;
			ch-ua-arch;
			ch-prefers-reduced-transparency;
			deferred-fetch;
			ch-save-data;
			deferred-fetch-minimal;
			ch-downlink;
			ch-ua-form-factors;
			ch-ua;
			ch-ua-model;
			ch-ect;
			autoplay;
			ch-ua-platform-version;
			ch-viewport-height;
			ch-ua-platform;
			ch-ua-full-version;
			aria-notify;
			ch-ua-high-entropy-values;
			ch-width;
			ch-prefers-reduced-motion;
			encrypted-media;
			ch-rtt;
			ch-ua-mobile;
			unload;
			ch-dpr;
			ch-prefers-color-scheme;
			ch-ua-wow64;
			attribution-reporting;
			fullscreen;
			private-state-token-redemption;
			ch-ua-bitness;
			sync-xhr;
			ch-device-memory;
			ch-viewport-width;
			picture-in-picture;
			clipboard-write;
		`;
		Viewer.id = editorManager.activeFile.id;
		Viewer.loading = "lazy";
		Viewer.src = link;
		Viewer.style.cssText = `
			position: absolute;
			border: none;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9999;
			background-color: white;
		`;

		// Push it inside the box.
		exports.totalTabs.set(Viewer.id, Viewer);
		editorManager.container.appendChild(Viewer);

		// Fix: Since "Acode" auto-switches to the tab on creation,
		// force the IFrame to show immediately if this is the active file.
		// So, not covering up by default.
	};

	// Written for generating full code piece.
	function insertSavedWebTile(title, url) {
		if (! exports.domCache.ghostText.hidden) {
			exports.domCache.sitesTileContainer.style.display = "block";
			exports.domCache.ghostText.hidden = true;
		};

		const item = document.createElement("li"), delIcon = document.createElement("span"), goIcon = document.createElement("span");

		item.className = "list-item";
		item.innerHTML = `
			<div>
				<span class="icon public"></span>
				<div>
					<span>${title}</span>
					<small>${url}</small>
				</div>
			</div>
		`;
		delIcon.dataset.action = goIcon.dataset.action = "manage-bookmarks";
		delIcon.className = "icon delete";
		goIcon.className = "icon forward";
		delIcon.onclick = async () => {
			if (await acode.confirm("WARNING", "Think at least thrice, remove this one?")) {
				item.remove();

				delete exports.bookmarkList[url];
				if (! Object.keys(exports.bookmarkList).length) {
					exports.domCache.sitesTileContainer.style.display = "none";
					exports.domCache.ghostText.hidden = false;
				};
			};
		};
		goIcon.onclick = () => {
			exports.docPage.hide();
			exports.domCache.activeTab.src = url;
		};

		item.append(goIcon, delIcon);

		return item;
	};

	// Everytime this panel must be updated when we need it.
	function updateControlStates(container) {
		// Tactics died, huh... We're implementing our old techniques.
		if (! exports.domCache.isDefined) {
			// Hook a shortcut for walking less.
			document.indexRoot = container;

			// Touch longest swiftness.
			Object.assign(exports.domCache, {
				"favicon": document.getElementByOrderedIndex(1, 0, 0),
				"addressbar": document.getElementByOrderedIndex(1, 1),
				"go": document.getElementByOrderedIndex(1, 2),
				"pageChanger": document.getElementByOrderedIndex(3),
				"browseCopied": document.getElementByOrderedIndex(4),
				"showSavedSites": document.getElementByOrderedIndex(5),
				"add": document.getElementByOrderedIndex(6, 0),
				"reload": document.getElementByOrderedIndex(6, 1),
				"back": document.getElementByOrderedIndex(6, 2),
				"forward": document.getElementByOrderedIndex(6, 3),
				"openBrowser": document.getElementByOrderedIndex(6, 4)
			});

			// Set-up our sandboxed DOM.
			document.indexRoot = exports.docPage;
			document.getElementByOrderedIndex(0, 1).innerText = "Saved Sites";
			exports.docPage.innerHTML = `
				<div class="segmented-control">
					<button class="long-size">Save current site for later</button>
				</div>
				<hr/>
				<ul class="list scroll inner-section"></ul>
				<hr/>
				<h1 class="zeno-state">Nothing to show.</h1>
			`;
			exports.domCache.sitesTileContainer = document.getElementByOrderedIndex(1, 2);
			exports.domCache.ghostText = document.getElementByOrderedIndex(1, 4);

			// Determiners for what jobs should those components perform.
			exports.domCache.favicon.onerror = function () {
				this.hidden = true;
				this.parentNode.classList.add("public");
			};
			exports.domCache.go.onclick = () => exports.domCache.activeTab.src = normalizeURI(exports.domCache.addressbar.value) || "about:blank";
			exports.domCache.pageChanger.onclick = async () => {
				let { title, url } = exports.homepage.access();

				title = await acode.prompt("Preset your custom name:", title);

				if (typeof title !== "string") return;

				url = await acode.prompt("State a primary address for initial loading:", url);

				if (typeof url !== "string") return;

				url = normalizeURI(url);

				if (! (title && url)) acode.alert("ERROR", "Invalid information(s): Giving empty name or normal text as link is impermissible.");
				else exports.homepage.access({
					"title": title,
					"url": url
				}, Toast, "Start page updated successfully.");
			};
			exports.domCache.browseCopied.onclick = () => cordova.plugins.clipboard.paste(value => {
				if (URL.canParse(value)) exports.domCache.activeTab.src = value;
				else acode.alert("ERROR", "Copied text isn't a valid link to go.");
			}, message => acode.alert("ERROR", "Can't read clipboard: " + message));
			exports.domCache.showSavedSites.onclick = () => exports.docPage.show();
			exports.domCache.add.onclick = async (_, { title, url } = exports.homepage.access()) => {
				title = await acode.prompt("Rename tab if needed:", title);

				if (typeof title === "string") {
					createTab(title || "New Tab", normalizeURI(exports.domCache.addressbar.value) || url);
					updateControlStates();
				};
			};
			exports.domCache.reload.onclick = exports.domCache.back.onclick = exports.domCache.forward.onclick = function () {
				exports.domCache.refActBtnsOff = false;
				exports.domCache.activeTab.browsingHistory.navigate(this.id);
			};
			exports.domCache.openBrowser.onclick = () => acode.exec("open-inapp-browser", exports.domCache.activeTab.src);
			exports.domCache.sitesTileContainer.style.display = "none";

			// Shortcut icon updater is on duty:
			Object.defineProperty(exports.domCache, "webIconHref", {
				set(url) {
					this.favicon.parentNode.classList.remove("public");
					this.favicon.hidden = false;
					this.favicon.src = "https://www.google.com/s2/favicons?domain=" + new URL(url).hostname + "&sz=16";
				},
				enumerable: true,
				configurable: true
			});

			// Assisted/forced disabling action buttons are on duty:
			Object.defineProperty(exports.domCache, "refActBtnsOff", {
				set(value) {
					this.reload.disabled = value;
					this.back.disabled = value || this.activeTab.browsingHistory.currentIndex === 0;
					this.forward.disabled = value || this.activeTab.browsingHistory.currentIndex === this.activeTab.browsingHistory.length - 1;
				},
				enumerable: true,
				configurable: true
			});

			// I'm lonely.
			document.getElementByOrderedIndex(1, 0, 0).onclick = async () => {
				if (exports.bookmarkList.hasOwnProperty(exports.domCache.activeTab.src)) return acode.alert("ERROR", "Can't create this one, already exists.");

				let title = (await acode.prompt("Plan a great name:"))?.trim().replace(/\s+/g, " ");

				if (typeof title === "string") {
					title = title || "Untitled";
					exports.bookmarkList[exports.domCache.activeTab.src] = title;
					exports.domCache.sitesTileContainer.appendChild(insertSavedWebTile(title, exports.domCache.activeTab.src));
				};
			};

			// Me too.
			exports.domCache.isDefined = true;

			// More than you bro.
			for (const url in exports.bookmarkList) exports.domCache.sitesTileContainer.appendChild(insertSavedWebTile(exports.bookmarkList[url], url));
		};

		// Wanna rest? Go, get on bed.

		// Shortcut binding is helpful.
		exports.domCache.activeTab = exports.totalTabs.get(editorManager.activeFile.id);

		// Restrict user to compromise smartphone health.
		exports.domCache.add.disabled = exports.totalTabs.size >= 3;

		// Occupation assignment hasn't done yet.
		if (URL.canParse(exports.domCache.activeTab?.src)) {
			if (! exports.domCache.addressbar.value.trim()) exports.domCache.addressbar.value = exports.domCache.activeTab.src;

			exports.domCache.webIconHref = exports.domCache.activeTab.src;
			exports.domCache.go.style.visibility = "visible";
			exports.domCache.browseCopied.disabled = exports.domCache.showSavedSites.disabled = exports.domCache.openBrowser.disabled = exports.domCache.refActBtnsOff = false;
		} else {
			// Force setting up fallback icon.
			exports.domCache.favicon.dispatchEvent(new Event("error"));

			exports.domCache.go.style.visibility = "hidden";
			exports.domCache.browseCopied.disabled = exports.domCache.showSavedSites.disabled = exports.domCache.openBrowser.disabled = exports.domCache.refActBtnsOff = true;
		};
	};

	// Of course, start your journey.
	acode.setPluginInit(exports.packageId, (baseDir, $page) => fetch(URL.join(baseDir, "plugin.json")).then(request => {
		// Check situation.
		if (! request.ok) throw new Error("HTTP code: " + request.status);

		// Parse text file.
		return request.json();
	}).then(result => {
		// Detach first piece, then other works.
		const forename = result.name.trim().split(/\s+/)[0];

		// Autism is live even in virtual worlds.
		Object.assign(exports, {
			"bookmarkList": (that => new Proxy({...that.access()}, {
				set(target, key, value) {
					if (target[key] === value) return true;

					target[key] = value;
					that.access({...target});
					return true;
				},
				deleteProperty(target, key) {
					delete target[key];
					that.access({...target});
					return true;
				}
			}))($config("bookmarks", true)),
			"docPage": $page,
			"homepage": $config("homepage", true),
			"toolAttrs": "span[title='" + forename + "'][data-action='sidebar-app'][data-id='" + exports.packageId + "']",
			"recentTabs": $config("recentTabs")
		});

		// For now: use their product instead.
		if (! URL.canParse(exports.homepage.access()?.url)) {
			exports.homepage.access({
				"title": "Google Search",
				"url": "https://www.google.com/webhp?igu=1"
			});

			// Attention please!
			// Could be its first initialization.
			acode.alert("WARNING", "Cache database for both In-App Browser and " + forename + " are different, maybe somewhere progress may need to be redone.");
		};

		// Brand our little product.
		acode.addIcon(forename.toLowerCase(), URL.join(baseDir, result.icon));

		// Attach the watcher.
		exports.domCache.menuBtn.addEventListener("click", _interactionWatcher);

		// Pick up broom and side dead bodies.
		editorManager.files.forEach(identifier => {
			if (exports.recentTabs.access()?.includes?.(identifier.id)) identifier.remove(true, {
				"ignorePinned": true // Force close without save prompt with bypassing the pinned check.
			});
		});
		exports.recentTabs.purge();

		// Listen for future tab switches to show/hide sessions + start/stop panel popup watching.
		// Fastest looking up for live tabs structure, just single passing, no extra tricks.
		editorManager.on("switch-file", property => exports.totalTabs.forEach(identifier => identifier.style.visibility = identifier.id === property.id ? "visible" : "hidden"));

		// None said to flex with complications, just fix memory leaking and optimize performance.
		// Advantage: Not ours? Don't touch that = zero reflow cost.

		// Clean up if the user closes our tab.
		editorManager.on("remove-file", property => {
			const targetTab = exports.totalTabs.get(property.id);

			targetTab?.contentWindow?.location.replace("about:blank");
			targetTab?.remove?.();
			exports.totalTabs.delete(property.id);
		});

		// Shoot.
		Sidebar.add(forename.toLowerCase(), exports.packageId, forename, container => container.innerHTML = `
			<link rel="stylesheet" href="${baseDir}/src/ui.css"/>
			<div class="top-section">
				<span class="icon"><img/></span>
				<input type="text" dir="auto" placeholder="Enter address to browse"/>
				<button><img src="${baseDir}/img/enter.svg"/></button>
			</div>
			<br/>
			<button class="long-size">Change my HomePage</button>
			<button class="long-size">Go to copied URL</button>
			<button class="long-size">Open saved sites list</button>
			<div class="bottom-section">
				<button><img src="${baseDir}/img/add.svg"/></button>
				<button><img src="${baseDir}/img/reload.svg"/></button>
				<button><img src="${baseDir}/img/back.svg"/></button>
				<button><img src="${baseDir}/img/forward.svg"/></button>
				<button><img src="${baseDir}/img/external-link.svg"/></button>
			</div>
		`, false, updateControlStates);
	}).catch(message => {
		// Sorry to hear.
		console.error("Unexpected occurrence:", message);
		acode.alert("ERROR", "Skipped process due to execution failure.");
	}));

	// Goodnight friend, meet me at the end.
	acode.setPluginUnmount(exports.packageId, () => {
		// Last line is being deleted from here:
		// Alas! My one week is successfully wasted btw.
		Sidebar.remove(exports.packageId);

		// Detach the watcher.
		exports.domCache.menuBtn.removeEventListener("click", _interactionWatcher);

		// Strike down temporarily for next launch.
		exports.domCache.isDefined = false;
	});

	// Yo, polishing completed. And in bonus, electron saver version is ready.
	// Leave star, then wait for more inventions. Gotta take a power nap. See yah!
})();