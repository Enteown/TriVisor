// Please, beware skidding without understanding the concept.
// Here, is the basement of machinery, stepping into it.
// @Todo: Finally, begin development (Mon, Jun 22)




// Shhhh...
"use strict";

// Let's go!
(() => {
	// Polyfill: works back to: Android 7
	if (! URL.hasOwnProperty("canParse")) Object.defineProperty(URL, "canParse", {
		"value": function (Url, baseUrl) {
			try {
				// The ultimate solution.
				new URL(Url, baseUrl);

				return true;
			} catch {
				return false;
			};
		},
		"writable": true,
		"enumerable": true,
		"configurable": true
	});

	// Capture exact photocopy of all required tools.
	const exports = {
		"domCache": {
			"isDefined": false
		},
		"googleLite": {
			"title": "Google Search",
			"Url": "https://www.google.com/webhp?igu=1"
		},
		"guardOpts": {
			"childList": true, // Capture ordered spawn.
			"subtree": true, // Icons are not direct children of page.
			"attributes": true, // Inspect all class toggles.
			"attributeFilter": ["class"] // Keep it very cheap.
		},
		"packageId": (() => {
			// Build folder path, then cut out the name of target.
			const parts = document.currentScript.src.split("/");

			// Pack up to take our newly cooked hot equipment.
			return parts.at(parts.indexOf("plugins") + 1);
		})(),
		"recentTabs": new Proxy(new Map(), {
			get (target, operation, receiver) {
				// Block those dangerous ones first.
				// We wanna intercept you all:
				if (["clear", "delete", "set"].includes(operation)) return function (...args) {
					// Act hot.
					Map.prototype[operation].apply(target, args);

					// A-Memorize!
					settings("recentTabs").access(Array.from(target.keys()));

					// Grant for chaining.
					return receiver;
				};

				// Fix: Handle getters specifically.
				if (operation == "size") return target.size;

				// Others should be triggered originally.
				const value = Reflect.get(target, operation, receiver);

				// If it's a method, connect it to mainline.
				if (typeof value == "function") return value.bind(target);

				return value;
			}
		})
	}, config = acode.require("settings"),

	// Better to perform shortcut binding, will provide design agility.
	Alert = acode.require("alert"), Confirm = acode.require("confirm"), Prompt = acode.require("prompt"), Sidebar = acode.require("sidebarApps"), Toast = acode.require("toast"), PanelGuard = new MutationObserver(parameters => {
		// Watch carefully except trivial matters.
		for (const identifier of parameters) {
			// Case: Class moved to another node -> check if it was our icon.
			if (identifier.type == "attributes" && identifier.target.matches(exports.btnName) && identifier.target.classList.contains("active")) {
				updateControlStates();
				break;
			};

			// Case: Capture element when got injected/removed.
			if (identifier.type == "childList" && document.querySelector(exports.btnName)?.classList.contains("active")) {
				updateControlStates();
				break;
			};
		};
	});

	// We must preserve your progress safely.
	function settings(key, isPersistent = false) {
		// Punish if user mess with normal operations.
		if (typeof key != "string" || key.length == 0) throw new Error("Subject must be valid with plain contents.");

		// Real successor of its ancestor.
		function getType(value) {
			return Object.prototype.toString.call(value).slice(8, -1);
		};

		// Didn't find yourself? Feel free to reserve a seat.
		if (getType(config.value[exports.packageId]) != "Object") config.value[exports.packageId] = new Object();

		// Magic words to write database in disk space.
		function save() {
			// It'll accomplish mission silently.
			config.update({
				[exports.packageId]: config.value[exports.packageId]
			}, false);
		};

		// Tools that'll handover my personal assistant.
		function purge() {
			if (! isPersistent) localStorage.removeItem(key);
			else if (config.value[exports.packageId].hasOwnProperty(key)) {
				delete config.value[exports.packageId][key];
				save();
			};
		};
		function access(value) {
			// Gather old things.
			const content = isPersistent ? config.value[exports.packageId][key] : localStorage.getItem(key);

			// Replace the target selection if exists.
			if (typeof value != "undefined") {
				// News: Brat protection armor equipped.
				if (! (["Array", "Boolean", "Null", "Object", "String"].includes(getType(value)) || Number.isFinite(value))) value = null;
				if (isPersistent) {
					// Push into it.
					config.value[exports.packageId][key] = value;

					// Z-Memorize!
					save();
				} else localStorage.setItem(key, JSON.stringify(value));
			};

			// Sure?
			if (typeof content == "undefined" || (! isPersistent && getType(content) == "Null")) return void 0;

			// Hey, send it.
			else return isPersistent ? content : JSON.parse(content);
		};

		// The persistent scoped helpers.
		return { access, purge };
	};

	// Written for adding tabs.
	function createTab(title, link) {
		// Create brand new product.
		const Viewer = document.createElement("iframe");

		// Give illegal birth to dummy "New File" tab handle.
		acode.newEditorFile(title, {
			"editable": false, // Prevents the keyboard from popping up.
			"hideQuickTools": true
		});

		// Configure necessary settings.
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
		Viewer.id = editorManager.activeFile.id;
		Viewer.src = link;

		// Push it inside the box.
		exports.recentTabs.set(Viewer.id, Viewer);
		editorManager.container.appendChild(Viewer);

		// Fix: Since "Acode" auto-switches to the tab on creation,
		// force the IFrame to show immediately if this is the active file.
		// So, not covering up by default.
	};

	// Everytime this panel must be updated when we need it.
	function updateControlStates() {
		// Tactics died, huh, we're now implementing our old techniques.
		if (! exports.domCache.isDefined) {
			// Touch longest swiftness.
			Object.assign(exports.domCache, {
				"favicon": document.querySelector("img#shortcut_icon"),
				"textBox": document.querySelector("input#address_bar"),
				"go": document.querySelector("button#go"),
				"hpChanger": document.querySelector("button#change_hpinfo"),
				"openBrowser": document.querySelector("button#open_browser"),
				"resetAll": document.querySelector("button#reset_defaults"),
				"add": document.querySelector("button#add"),
				"reload": document.querySelector("button#reload"),
				"back": document.querySelector("button#back"),
				"forward": document.querySelector("button#forward")
			});

			// Determiners for what jobs should those components perform.
			exports.domCache.favicon.onerror = () => exports.domCache.favicon.src = exports.defWebIco;
			exports.domCache.go.onclick = () => exports.domCache.activeTab.src = exports.domCache.textBox.value.trim().length == 0 ? "about:blank" : exports.domCache.textBox.value;
			exports.domCache.hpChanger.onclick = async () => {
				const hpInf = exports.hpInf.access(), title = await Prompt("Give the name of website:", hpInf.title), Url = await Prompt("Paste your custom start link:", hpInf.Url);

				if (Boolean(title?.length) && URL.canParse(Url)) {
					exports.hpInf.access({
						"title": title,
						"Url": Url
					});
					Toast("Start page updated successfully.");
				} else Alert("ERROR", "Normal text in link and empty name isn't supported and never would be.");
			};
			exports.domCache.openBrowser.onclick = () => acode.exec("open-inapp-browser", exports.domCache.activeTab.src);
			exports.domCache.resetAll.onclick = async () => {
				if (await Confirm("DANGER!", "Consider at least thrice, advancing will wipe all settings and restore defaults. Continue?") == 1) {
					// Forget future regrets.
					exports.hpInf.access(exports.googleLite);

					Toast("Clearing succeeded.");
				} else Toast("Good! I appreciate your choice, nevermind.");
			};
			exports.domCache.add.onclick = async () => {
				const hpInf = exports.hpInf.access();

				createTab(await Prompt("Name your tab:", hpInf.title) || "New Tab", exports.domCache.textBox.value || hpInf.Url);

				if (exports.recentTabs.size == 1) PanelGuard.observe(document.body, exports.guardOpts);
			};
			exports.domCache.reload.onclick = () => exports.domCache.activeTab.contentWindow.location.reload();
			exports.domCache.back.onclick = () => exports.domCache.activeTab.contentWindow.history.back();
			exports.domCache.forward.onclick = () => exports.domCache.activeTab.contentWindow.history.forward();

			// I'm lonely.
			exports.domCache.isDefined = true;
		} else if (exports.recentTabs.size == 0) PanelGuard.disconnect();

		// Wanna rest? Go, get on bed.

		// Shortcut binding is helpful.
		exports.domCache.activeTab = exports.recentTabs.get(editorManager.activeFile.id);

		// Restrict user to compromise smartphone health.
		exports.domCache.add.disabled = exports.recentTabs.size >= 3;

		// Occupation assignment hasn't done yet.
		if (URL.canParse(exports.domCache.activeTab?.src)) {
			if (exports.domCache.textBox.value.trim().length == 0) exports.domCache.textBox.value = exports.domCache.activeTab.src;

			exports.domCache.favicon.src = "https://www.google.com/s2/favicons?domain=" + new URL(exports.domCache.activeTab.src).hostname + "&sz=16";
			exports.domCache.go.style.display = "block";
			exports.domCache.openBrowser.disabled = exports.domCache.reload.disabled = exports.domCache.back.disabled = exports.domCache.forward.disabled = false;
			exports.domCache.resetAll.disabled = true;
		} else {
			exports.domCache.favicon.src = exports.defWebIco;
			exports.domCache.go.style.display = "none";
			exports.domCache.openBrowser.disabled = exports.domCache.reload.disabled = exports.domCache.back.disabled = exports.domCache.forward.disabled = true;
			exports.domCache.resetAll.disabled = false;
		};
	};

	// Of course, start your journey.
	acode.setPluginInit(exports.packageId, baseDir => fetch(baseDir + "/plugin.json").then(request => {
		// Check situation.
		if (! request.ok) throw new Error("HTTP code: " + request.status);

		// Parse file data.
		return request.json();
	}).then(result => {
		// Detach first piece, then other works.
		const forename = result.name.trim().split(/\s+/)[0], recentTabs = settings("recentTabs"), firstInit = (identifier => {
			// Mark for new users, are they unknown?
			// Notice: Hooray! I've been chosen, thanks buddy.

			return (identifier.access() || identifier.access(true)) ?? false;
		})(settings(forename.concat(":") + "firstInit"));

		// Autism is live even in virtual worlds.
		Object.assign(exports, {
			"defWebIco": baseDir + "/img/globe.png",
			"hpInf": settings("homePage", true),
			"btnName": "span[title='" + forename + "'][data-id='" + exports.packageId + "']"
		});

		// Pick up broom and side dead bodies.
		editorManager.files.forEach(identifier => {
			if (recentTabs.access()?.includes?.(identifier.id)) identifier.remove(true, {
				"ignorePinned": true // Force close without save prompt with bypassing the pinned check.
			});
		});
		recentTabs.purge();

		// Listen for future tab switches to show/hide sessions.
		// Fastest looking up for live tabs structure, just single passing, no callbacks, no extra methods.
		editorManager.on("switch-file", property => exports.recentTabs.forEach(identifier => identifier.style.visibility = identifier.id == property.id ? "visible" : "hidden"));

		// Advantage: Not ours? Don't touch that = zero reflow cost.

		// Clean up if the user closes our tab.
		editorManager.on("remove-file", property => {
			const targetTab = exports.recentTabs.get(property.id);

			targetTab?.contentWindow?.location.replace("about:blank");
			targetTab?.remove?.();
			exports.recentTabs.delete(property.id);
		});

		// Shoot.
		PanelGuard.observe(document.body, exports.guardOpts);
		Sidebar.add("public", exports.packageId, forename, container => container.innerHTML = `
			<link rel="stylesheet" href="${baseDir}/src/ui.css"/>
			<div class="top_content">
				<img id="shortcut_icon"/>
				<input id="address_bar" type="text" dir="auto" placeholder="Type to navigate"/>
				<button id="go"><img src="${baseDir}/img/enter.svg"/></button>
			</div>
			<br/>
			<button id="change_hpinfo" class="long_size">Change default location</button>
			<button id="open_browser" class="long_size">Launch In-App Browser</button>
			<button id="reset_defaults" class="long_size">Reset all settings</button>
			<div class="bottom_content">
				<button id="add"><img src="${baseDir}/img/add.svg"/></button>
				<button id="reload"><img src="${baseDir}/img/reload.svg"/></button>
				<button id="back"><img src="${baseDir}/img/back.svg"/></button>
				<button id="forward"><img src="${baseDir}/img/forward.svg"/></button>
			</div>
		`, true);

		// Attention please!
		if (! firstInit) {
			// Handful of default settings.
			// For now: use their product instead.
			exports.hpInf.access(exports.googleLite);

			Alert("WARNING", "Cache database for both In-App Browser and " + forename + " are different, maybe somewhere progress may need to be redone.");
		};
	}).catch(message => {
		// Sorry to hear.
		console.error("Unexpected occurrence:", message);
		Alert("ERROR", "Skipped process due to execution failure.");
	}));

	// Goodnight friend, meet me at the end.
	acode.setPluginUnmount(exports.packageId, () => {
		Sidebar.remove(exports.packageId);
		PanelGuard.disconnect();

		exports.domCache.isDefined = false;
	});
})();

// All done, we need to take a power nap.
// Wait for more inventions, see yah later!