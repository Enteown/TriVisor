// Please, beware skidding without understanding the concept.
// Here, is the basement of machinery, stepping into it.
// @Todo: Finally, pause development (Sun, Sep 6)




// Never underestimate my power!
"use strict";

// Notice (Loziya-included): Recycled code snippets from an unreleased library.

// *** Polyfills A.G.: Backward compatibility supported, works even on: Android 7 (Nougat)
// Tip: Negative integers can be used as descending indexes.
if (! ("at" in [])) Object.defineProperty(Array.prototype, "at", {
	"value": function at(index) {
		if (index < 0) index += this.length;
		return this[index];
	},
	"writable": true,
	"configurable": true
});

// *** Helpers: Injected, those are sustainable, easy-to-use and bug proof.
// Tip: HTML coordinated DOM selector.
Object.assign(document, {
	"indexRoot": null,
	"getElementByOrderedIndex": function (...sequence) {
		const voidTags = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"];
		let childElement;

		if (this.indexRoot?.nodeType !== Node.ELEMENT_NODE || voidTags.includes(this.indexRoot.tagName.toLowerCase())) throw new TypeError("Invalid DOM: expected standard (not auto-closing tags) element, but got: " + this.indexRoot?.constructor?.name);
		return sequence.reduce((content, index) => {
			// Now it can even grab itself.
			// News: Removed legacy allowlist.
			childElement = content.children;

			if (index < 0 || index >= childElement.length) throw new RangeError("Indexing is out of bounds, faulty argument: " + index);
			return childElement[index];
		}, this.indexRoot);
	}
});

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

	// Look for existing protocol, or concatenate the modern locator.
	if (! protocols.includes(uri.match(/^([a-z][a-z0-9+.-]*):\/\//i)?.[1].toLowerCase())) uri = "https://" + uri;

	try {
		// The ultimate solution.
		const props = new URL(uri), [, pathname, query, hash] = realpath.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

		if (/^(?!.*\.\.)[a-zA-Z0-9\-._~!$&'()*+,;=:@%\/]+$/.test(pathname)) props.pathname += (! (props.pathname.endsWith("/") || realpath.startsWith("/")) ? "/" : "") + pathname;
		if (query) props.search = query;
		if (hash) props.hash = hash;
		return props.href;
	} catch {
		// No normal text traversal should survive.
		return "";
	};
};



// Keep your room clean.
(function () {
	// Capture exact photocopy of all required items.
	const factory = {
		"domCache": {
			"defined": false
		},
		"packageId": (() => {
			// Build folder path, then cut out the name of target.
			const parts = document.currentScript.src.split("/");

			// Pack up to take our newly cooked hot equipment.
			return parts.at(parts.indexOf("plugins") + 1);
		})(),
		"totalTabs": new Proxy({}, {
			// We need your interactions here:
			set(target, key, value) {
				// Plus, if needed.
				if (! (key in target)) ++ target.length;
				// Act cool.
				target[key] = value;
				// A-Memorize!
				factory.recentTabs.accessItem(Object.keys(target));
				// Soup is hot, okay?
				return true;
			},
			// That just existing as extras:
			deleteProperty(target, key) {
				// Minus, if needed.
				if (key in target) -- target.length;
				// Dispose of in fire.
				delete target[key];
				// What if, when it's hardcoded?
				if (key in target) ++ target.length;
				// B-Memorize!
				if (target.length) factory.recentTabs.accessItem(Object.keys(target));
				else factory.recentTabs.removeItem();
				// Others should be triggered originally.
				return true;
			}
		})
	},

		// Better to perform shortcut binding, will provide design agility.
		Sidebar = acode.require("sidebarApps"),

		// The dummy counterparts.
		_config = acode.require("settings"), _save = section => _config.update({
			// Magic words to write database in disk file.
			[factory.packageId]: section
		}, false),

		_error = new Event("error"), _redirectorBlueprint = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src"),

		// Notice: Removed observer which rises heavy process usage.

		// Hijacking plan cancelled, activating beast mode.
		// Watcher for menu toggles.
		_interactionWatcher = () => setTimeout(() => document.querySelector("span[data-action='sidebar-app'][data-id='" + factory.packageId + "']")?.classList.contains("active") && updateControlStates());


	// Neither before, nor after it gets modified. So, no worries, chill out!
	Object.defineProperty(factory.totalTabs, "length", {
		"value": 0,
		"writable": true
	});

	// I'm empty.
	function $config(key, isPersistent) {
		// Punish if user mess with normal operations.
		if (typeof key !== "string" || ! key) throw new Error("Subject must be valid with plain text.");

		// We must preserve your progress safely.
		let section = _config.value[factory.packageId];

		// Didn't find yourself? Silently reserve a seat.
		if (section?.constructor?.name !== "Object") section = _config.value[factory.packageId] = {};

		// Persistent scoped helpers that'll handover my personal assistant.
		return {
			accessItem(value, callbackFunction, ...args) {
				// Gather old things.
				const content = isPersistent ? section[key] : localStorage.getItem(key);

				// Replace the target selection when needed.
				if (value !== void 0) {
					// Yelling modern ways, improving clever ways.
					const myType = typeof value;

					// Tip: Brat protection armor equipped.
					if (! (value === null || myType === "boolean" || myType === "string" || Array.isArray(value) || value?.constructor?.name === "Object" || Number.isFinite(value))) value = null;
					if (isPersistent) {
						// Push into it.
						section[key] = value;

						// Z-Memorize!
						_save(section);
					} else localStorage.setItem(key, JSON.stringify(value));

					// Do after when someone asks for.
					if (typeof callbackFunction === "function") callbackFunction.apply(null, args);
				};

				// Sure?
				if (content === void 0 || (! isPersistent && content === null)) return;

				// Hey, send it.
				return isPersistent ? content : JSON.parse(content);
			},
			removeItem() {
				if (! isPersistent) return localStorage.removeItem(key);
				if (section.hasOwnProperty(key)) {
					delete section[key];
					_save(section);
				};
			}
		};
	};

	// A new, feather-heavy converter for your social media links into a standard (embedded) one.
	function generateEmbedUrl(url) {
		const props = new URL(url), knownParams = new URLSearchParams(), currentTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", playerConfigHardcoded = {
			"flags": ["autoplay", "loop", "mute"],
			"states": [factory.domCache.autoplayStatus?.checked, factory.domCache.loopStatus?.checked, factory.domCache.muteStatus?.checked]
		};
		let isShortUrl = false, embedUrl, paramString = "";

		// I, hate spams.
		if (props.pathname.includes("/embed/") || props.host.endsWith("geo.dailymotion.com") || props.host.endsWith("player.vimeo.com")) return url;

		if (props.host.endsWith("codepen.io") && props.pathname.includes("/pen/")) {
			const [, username,, slugHash] = props.pathname.split("/");

			if (username && slugHash) embedUrl = "https://codepen.io/" + username + "/embed/" + slugHash;
			else return "";

			delete playerConfigHardcoded.flags; // Pickyy, really, sorryy.

			knownParams.append("default-tab", "result");
			knownParams.append("theme-id", currentTheme);
			knownParams.append("preview", true);
			knownParams.append("editable", false);
			knownParams.append("animations", "run");
		} else if (props.host.endsWith("dailymotion.com")) {
			const [, kind, id] = props.pathname.split("/"), time = props.searchParams.get("startTime");

			if (id && (kind === "video" || kind === "playlist")) knownParams.append(kind, id);
			else return "";

			embedUrl = "https://geo.dailymotion.com/player.html";

			if (time) knownParams.append("start", parseInt(time, 10));
		} else if (props.host.endsWith("facebook.com") || props.host.endsWith("fb.com") || props.host.endsWith("fb.watch") && (isShortUrl = true)) {
			embedUrl = "https://www.facebook.com/plugins/" + (path.includes("/reel/") || path.includes("/videos/") || path.includes("/watch") || isShortUrl ? "video" : "post") + ".php"; // Might be old, but is a dominating company, huhh...

			// Determined content type? Good.
			// Now set-up some parameters:
			knownParams.append("allowfullscreen", true);
			knownParams.append("container_width", screen.availWidth);
			knownParams.append("href", encodeURIComponent(url));
			knownParams.append("lazy", true);
			knownParams.append("locale", navigator.language.replaceAll("-", "_"));
			knownParams.append("sdk", "joey"); // What The Heck! Fucking guy's lovel by Mark? Yak thuuuu!
			knownParams.append("show_captions", true);
			knownParams.append("show_text", true);

			delete playerConfigHardcoded.flags[1];
			delete playerConfigHardcoded.flags[2];
		} else if (props.host.endsWith("instagram.com") && (props.pathname.includes("/p/") || props.pathname.includes("/reel/"))) {
			embedUrl = "https://www.instagram.com/";

			// If someone copies link directly from profile, then we get this structure:
			// === Author <> Type of Content <> Token (ID) ===
			const [, _p1, _p2, _p3] = props.pathname.split("/");

			if (! _p1) return "";
			if (_p3) embedUrl += _p2 + "/" + _p3;
			else if (_p2) embedUrl += _p1 + "/" + _p2; // If from feed, scene changes a bit.
			else return "";

			embedUrl += "/embed/captioned/";

			knownParams.append("cr", 1);
			knownParams.append("theme", currentTheme); // Undocumented, fully experimental, don't rely on it.
			knownParams.append("wp", screen.availWidth);

			// What a disbelief, eww.
			delete playerConfigHardcoded.flags;
		} else if (props.host.endsWith("jsfiddle.net")) {
			const [, username, fiddleId] = props.pathname.split("/");

			if (username && fiddleId) embedUrl = "https://jsfiddle.net/" + username + "/" + fiddleId + "/embed/result,html,css,js,resources/" + currentTheme;
			else return "";

			delete playerConfigHardcoded.flags;
		} else if (props.host.endsWith("twitter.com") || props.host.endsWith("x.com")) {
			const [, username, kind, id] = props.pathname.split("/");

			if (id && (kind === "status" || kind === "post")) knownParams.append("id", id);
			else return "";

			embedUrl = "https://platform.twitter.com/embed/Tweet.html";

			// Bro said, "Twitter is the boring one. It just shows the tweet and lets the user control everything." that's why I did that:
			delete playerConfigHardcoded.flags;

			knownParams.append("dnt", true); // A pinch of "security", we don't believe them.
			knownParams.append("embedId", "twitter-widget-0");
			knownParams.append("frame", true);
			knownParams.append("hideCard", false);
			knownParams.append("hideThread", false);
			knownParams.append("lang", language.split("-")[0]);
			knownParams.append("theme", currentTheme);
			knownParams.append("width", screen.availWidth + "px");
		} else if (props.host.endsWith("vimeo.com") && ! props.host.includes("player")) {
			const videoId = props.pathname.slice(1), oldToken = props.searchParams.get("h"), privacyToken = props.searchParams.get("turnstile");

			if (videoId) embedUrl = "https://player.vimeo.com/video/" + videoId;
			else return "";

			if (privacyToken) knownParams.append("turnstile", privacyToken);
			else if (oldToken) knownParams.append("h", oldToken);

			knownParams.append("autopause", 1);
			knownParams.append("dnt", 1); // A handful of "privacy" btw.

			// Huhh, it would be easy if you guys kept it steady.
			playerConfigHardcoded.flags[2] = "muted";
		} else if (props.host.endsWith("youtube.com") || props.host.endsWith("youtu.be") && (isShortUrl = true)) {
			// Handles standard videos, YouTube links, Shorts, Playlists, Timestamps, and Search links.
			embedUrl = "https://www.youtube.com/embed/";

			// Zeroth, initialize "getting ready..."
			const time = props.searchParams.get("t") || props.searchParams.get("start"), playlistId = props.searchParams.get("list"), search = props.searchParams.get("search_query");
			let videoId, startSeconds = 0;

			// First, extract video identity based on the link structure.
			if (isShortUrl) videoId = props.pathname.slice(1);
			else if (props.pathname.startsWith("/shorts/")) videoId = props.pathname.split("/shorts/")[1];
			else if (props.pathname.startsWith("/watch")) videoId = props.searchParams.get("v");
			// What if Google team adds a new page in 3027, that's what lies ahead.

			// Second, construct the embed link.
			if (videoId) {
				embedUrl += videoId;

				if (playlistId) knownParams.append("list", playlistId);
				else knownParams.append("playlist", videoId);
			} else if (playlistId) {
				embedUrl += "videoseries";

				knownParams.append("list", playlistId);
			} else if (search) {
				// Fallback for search queries, never believe it clearly.
				embedUrl = embedUrl.slice(0, -1); // Remove trailing slash.

				knownParams.append("list", search);
				knownParams.append("listType", "search");
			} else return ""; // Forgive me, I couldn't "never gonna give you up..."

			// Third, parse time offset to seconds (e.g., "1h2m3s" -> 3723)
			if (time) if (isFinite(time)) startSeconds = parseInt(time, 10); // If it's already a raw number (e.g., 't=90')
			else {
				// Regular expression to extract hours, minutes, and seconds.
				const rMatch = time.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?/);

				if (rMatch) {
					const [, h = 0, m = 0, s = 0] = rMatch.map(Number);

					startSeconds = h * 3600 + m * 60 + s;
				};
			};
			if (startSeconds > 0) knownParams.append("start", startSeconds);
		} else return "";

		// But don't skip anything we've to achieve interactivity.
		playerConfigHardcoded.flags?.forEach((key, index) => key && knownParams.append(key, Number(playerConfigHardcoded.states[index] ?? false)));

		// Forth, append extra parts if exist.
		if (knownParams.size) paramString = "?" + knownParams.toString();

		// Ta-ta, byee.
		return embedUrl + paramString + props.hash;
	};

	// Written for adding tabs.
	function createTab(title) {
		// Create brand new product.
		const FrameProperties = {
			"browsingHistory": [],
			"container": document.createElement("iframe"),
			"latestSerial": -1,
			"subText": "Waiting for response..."
		};

		// Mutate its infrastructure for detecting destination changes.
		// Removed: As our "History saving strategy" has been rewritten completely, in 3 hours 15 minutes, nevermind.
		if (factory.domCache.frameSandboxing?.checked) FrameProperties.container.sandbox = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts"; // Explicitly say to invite internal instructions.

		// Create a dummy "New File" tab handle.
		acode.newEditorFile(title, {
			"editable": false, // Prevents the keyboard from popping up.
			"hideQuickTools": true,
			"render": true // Immediately switch the active tab view to this new file.
		});

		// Hey, mark that one in no time!
		FrameProperties.container.onerror = () => (FrameProperties.subText = "Website is unreachable, or server error.") && factory.activeTab === FrameProperties && (editorManager.header.subText = FrameProperties.subText);
		FrameProperties.container.onload = () => (FrameProperties.subText = "") || factory.activeTab === FrameProperties && (editorManager.header.subText = "Outgoing request stopped.");

		// Configure necessary options.
		FrameProperties.container.allow = `
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
			accelerometer;
			gyroscope;
			web-share;
			display-capture;
			cross-origin-isolated;
			publickey-credentials-get;
			identity-credentials-get;
			ch-preference-color;
			ch-preference-reduced-data;
			xr-spatial-tracking;
		`;
		FrameProperties.container.allowFullscreen = true;
		FrameProperties.container.frameBorder = 0;
		FrameProperties.container.loading = "lazy";
		FrameProperties.container.style.cssText = `
			position: absolute;
			border: none;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9999;
			background-color: white;
		`;
		FrameProperties.container.title = title;

		// Register "New Tab" properties.
		factory.totalTabs[editorManager.activeFile.id] = FrameProperties;

		// Push it inside the box.
		editorManager.container.appendChild(FrameProperties.container);

		// Prepare source request, now!
		FrameProperties.container.src = "about:blank";

		// Shortcut binding is helpful.
		factory.activeTab = FrameProperties;

		// Fix: Since "Acode" auto-switches to the tab on creation,
		// force the IFrame to show immediately if this is the active file.
		// So, not covering up by default.
	};

	// Evolved worker for executing actions related to already visited destinations.
	function handleNavigation(command, link) {
		if (command === "back" && factory.activeTab.latestSerial > 0) -- factory.activeTab.latestSerial;
		else if (command === "forward" && factory.activeTab.latestSerial < factory.activeTab.browsingHistory.length - 1) ++ factory.activeTab.latestSerial;
		else if (command === "go") {
			for (let step = factory.activeTab.browsingHistory.length - 1; step > factory.activeTab.latestSerial; -- step) factory.activeTab.browsingHistory.pop();
			if (link !== factory.activeTab.browsingHistory[factory.activeTab.latestSerial]) factory.activeTab.latestSerial = factory.activeTab.browsingHistory.push(link) - 1;
		} else console.warn("Unknown action command passed, rather doing almost nothing.");

		// Fish that link.
		const src = factory.activeTab.browsingHistory[factory.activeTab.latestSerial];

		// Recreate now.
		factory.activeTab.container.src = generateEmbedUrl(src) || (factory.domCache.proxyStatus?.checked ? factory.proxyPath + encodeURIComponent(src) : src);
	};

	// Written for generating a full code piece.
	function insertSavedSitesTile(title, url) {
		if (! factory.domCache.ghostText.hidden) {
			factory.domCache.sitesTileContainer.style.display = "block";
			factory.domCache.ghostText.hidden = true;
		};

		const item = document.createElement("li");

		item.className = "list-item";
		item.innerHTML = `
			<div>
				<img src="${"https://icons.duckduckgo.com/ip3/" + new URL(url).hostname + ".ico"}"/>
				<div>
					<span>${title}</span>
					<small>${url}</small>
				</div>
			</div>
			<span action="go" class="icon forward"></span>
			<span action="delete" class="icon delete"></span>
		`;

		item.setAttribute("href", url);
		factory.domCache.sitesTileContainer.appendChild(item);
	};

	// Set-up works for circle buttons.
	async function manageSavedSites(event) {
		const command = event.target.getAttribute("action"), url = event.target.parentNode.getAttribute("href");

		if (command && url) if (command === "go") {
			factory.domCache.addressbar.value = url;

			factory.myPage.hide();
			factory.domCache.go.click();
		} else if (command === "delete" && await acode.confirm("WARNING", "Think at least thrice, remove this one?")) {
			event.target.parentNode.remove();

			delete factory.allSavedSites[url];
			if (! Object.keys(factory.allSavedSites).length) {
				factory.domCache.sitesTileContainer.style.display = "none";
				factory.domCache.ghostText.hidden = false;
			};
		};
	};

	// Everytime this panel must be updated when we need it.
	function updateControlStates(container) {
		// Tactics died, huh... We're implementing our old techniques.
		if (! factory.domCache.defined) {
			// Hook a shortcut for walking less.
			document.indexRoot = container;

			// Touch longest swiftness.
			Object.assign(factory.domCache, {
				"favicon": document.getElementByOrderedIndex(0, 0, 0),
				"addressbar": document.getElementByOrderedIndex(0, 1),
				"go": document.getElementByOrderedIndex(0, 2),
				"pageChanger": document.getElementByOrderedIndex(2),
				"browseCopied": document.getElementByOrderedIndex(3),
				"showSavedSites": document.getElementByOrderedIndex(4),
				"proxyStatus": document.getElementByOrderedIndex(7, 0, 1, 0),
				"autoplayStatus": document.getElementByOrderedIndex(7, 1, 1, 0),
				"muteStatus": document.getElementByOrderedIndex(7, 2, 1, 0),
				"loopStatus": document.getElementByOrderedIndex(7, 3, 1, 0),
				"frameSandboxing": document.getElementByOrderedIndex(7, 4, 1, 0),
				"add": document.getElementByOrderedIndex(8, 0),
				"reload": document.getElementByOrderedIndex(8, 1),
				"back": document.getElementByOrderedIndex(8, 2),
				"forward": document.getElementByOrderedIndex(8, 3),
				"openBrowser": document.getElementByOrderedIndex(8, 4)
			});

			// Set-up our sandboxed DOM.
			factory.myPage.innerHTML = `
				<div class="segmented-control iframe-page">
					<button class="long-size iframe-page">Save current site for later</button>
				</div>
				<hr class="iframe-page"/>
				<ul class="list scroll inner-section iframe-page"></ul>
				<hr class="iframe-page"/>
				<h1 class="zeno-state iframe-page">Nothing to show.</h1>
			`;
			document.indexRoot = factory.myPage;
			document.getElementByOrderedIndex(0, 1).innerText = "Saved Sites";
			factory.domCache.sitesTileContainer = document.getElementByOrderedIndex(1, 2);
			factory.domCache.ghostText = document.getElementByOrderedIndex(1, 4);

			// Wake up... servants.
			document.getElementByOrderedIndex(1, 0, 0).onclick = async () => {
				const url = factory.domCache.proxyStatus.checked ? factory.activeTab.container.contentWindow.url.href : factory.activeTab.container.src;

				if (factory.allSavedSites.hasOwnProperty(url)) return acode.alert("ERROR", "Can't create this one, already exists.");

				let title = (await acode.prompt("Plan a great name:"))?.trim().replace(/\s+/g, " ");

				if (typeof title === "string") {
					title = title || "Untitled";
					factory.allSavedSites[url] = title;
					insertSavedSitesTile(title, url);
					toast("New entry added successfully.");
				};
			};

			// Close the gate.
			document.indexRoot = null;

			// Hmm, walk inside.
			factory.domCache.proxyStatus.accessItem = $config("proxyEnabled", true).accessItem;
			factory.domCache.autoplayStatus.accessItem = $config("autoplayVideos", true).accessItem;
			factory.domCache.muteStatus.accessItem = $config("startMute", true).accessItem;
			factory.domCache.loopStatus.accessItem = $config("loopPlaylist", true).accessItem;
			factory.domCache.frameSandboxing.accessItem = $config("frameSandboxing", true).accessItem;

			// Watcher for action management.
			factory.myPage.addEventListener("click", manageSavedSites);

			// Determiners for what jobs should those components perform.
			factory.domCache.favicon.onerror = function () {
				this.hidden = true;

				// Show default vector icon.
				this.parentNode.classList.add("public");
			};
			factory.domCache.go.onclick = () => {
				let baseUrl = normalizeURI(factory.domCache.addressbar.value) || factory.homepage.accessItem().url;

				do baseUrl = decodeURIComponent(baseUrl.replace(factory.proxyPath, ""));
				while (baseUrl.startsWith(factory.proxyPath));

				handleNavigation("go", factory.domCache.favicon.src = factory.domCache.addressbar.value = baseUrl);

				factory.domCache.back.disabled = factory.activeTab.latestSerial === 0;
				factory.domCache.forward.disabled = factory.activeTab.latestSerial === factory.activeTab.browsingHistory.length - 1;
			};
			factory.domCache.pageChanger.onclick = async () => {
				let { title, url } = factory.homepage.accessItem();

				if (typeof (title = await acode.prompt("Preset your custom name:", title)) !== "string") return;
				if (typeof (url = await acode.prompt("State a primary address for initial loading:", url)) !== "string") return;

				url = normalizeURI(url);

				if (! (title && url)) acode.alert("ERROR", "Invalid information(s): Giving empty name or normal text as link is impermissible.");
				else factory.homepage.accessItem({
					"title": title,
					"url": url
				}, toast, "Start page updated successfully.");
			};
			factory.domCache.browseCopied.onclick = () => cordova.plugins.clipboard.paste(text => {
				factory.domCache.addressbar.value = text;

				// Simulate a real click.
				factory.domCache.go.click();
			}, error => acode.alert("ERROR", "Can't read clipboard: " + error));
			factory.domCache.showSavedSites.onclick = () => factory.myPage.show();
			factory.domCache.proxyStatus.onchange = event => updateControlStates() || ! factory.domCache.proxyStatus.accessItem(event.target.checked) && toast("Kindly consider enabling this mode only for development purposes."); // Dizzy, swelling, not dead yet.
			factory.domCache.autoplayStatus.onchange = event => factory.domCache.autoplayStatus.accessItem(event.target.checked);
			factory.domCache.muteStatus.onchange = event => factory.domCache.muteStatus.accessItem(event.target.checked);
			factory.domCache.loopStatus.onchange = event => factory.domCache.loopStatus.accessItem(event.target.checked);
			factory.domCache.frameSandboxing.onchange = event => factory.domCache.frameSandboxing.accessItem(event.target.checked);
			factory.domCache.add.onclick = async () => {
				let { title, url } = factory.homepage.accessItem();

				if (typeof (title = await acode.prompt("Rename tab if needed:", title)) === "string") {
					createTab(title || "New Tab");
					handleNavigation("go", factory.domCache.addressbar.value = normalizeURI(factory.domCache.addressbar.value) || url);
					updateControlStates();
				};
			};
			factory.domCache.reload.onclick = () => {
				const bustUrl = factory.activeTab.container.src;

				// Murder, then revive.
				factory.activeTab.container.src = "about:blank";
				factory.domCache.addressbar.value = bustUrl;

				factory.domCache.go.click();
			};
			factory.domCache.back.onclick = factory.domCache.forward.onclick = function () {
				// Answer the pending request.
				handleNavigation(this.getAttribute("action"));

				factory.domCache.back.disabled = factory.activeTab.latestSerial === 0;
				factory.domCache.forward.disabled = factory.activeTab.latestSerial === factory.activeTab.browsingHistory.length - 1;
				factory.domCache.favicon.src = factory.domCache.addressbar.value = factory.activeTab.browsingHistory[factory.activeTab.latestSerial];
			};
			factory.domCache.openBrowser.onclick = () => system.openInBrowser(factory.domCache.proxyStatus.checked ? factory.activeTab.container.contentWindow.url.href : factory.activeTab.container.src);
			factory.domCache.sitesTileContainer.style.display = "none";

			// Assisted shortcut icon updater is on duty:
			Object.defineProperty(factory.domCache.favicon, "src", {
				get() {
					return _redirectorBlueprint.get.call(this);
				},
				set(src) {
					// Hide default vector icon.
					this.parentNode.classList.remove("public");

					// Reveal element itself.
					this.hidden = false;

					// Bring logo now.
					_redirectorBlueprint.set.call(this, "https://www.google.com/s2/favicons?domain=" + new URL(src).hostname + "&sz=16");
				},
				"configurable": true
			});

			// I'm lonely.
			factory.domCache.defined = true;

			// More than you I'm.
			for (const url in factory.allSavedSites) insertSavedSitesTile(factory.allSavedSites[url], url);

			// Restore previous values.
			factory.domCache.proxyStatus.checked = factory.domCache.proxyStatus.accessItem();
			factory.domCache.autoplayStatus.checked = factory.domCache.autoplayStatus.accessItem();
			factory.domCache.muteStatus.checked = factory.domCache.muteStatus.accessItem();
			factory.domCache.loopStatus.checked = factory.domCache.loopStatus.accessItem();
		};

		// Wanna rest? Go, get on bed.

		// Restrict user to compromise smartphone health.
		// Notice: It unlocks itself automatically, don't worry!
		factory.domCache.add.disabled = factory.totalTabs.length >= 3;

		// Occupation assignment hasn't done yet.
		if (factory.activeTab) {
			// Ouch, happening so repeatedly.

			factory.domCache.favicon.src = factory.domCache.addressbar.value = factory.activeTab.browsingHistory[factory.activeTab.latestSerial];
			factory.domCache.go.style.visibility = "visible";
			factory.domCache.back.disabled = factory.activeTab.latestSerial === 0;
			factory.domCache.forward.disabled = factory.activeTab.latestSerial === factory.activeTab.browsingHistory.length - 1;
			factory.domCache.browseCopied.disabled = factory.domCache.showSavedSites.disabled = factory.domCache.reload.disabled = factory.domCache.openBrowser.disabled = false;
		} else {
			// Force applying fallback icon.
			if (! factory.domCache.favicon.hidden) factory.domCache.favicon.dispatchEvent(_error);

			factory.domCache.go.style.visibility = "hidden";
			factory.domCache.browseCopied.disabled = factory.domCache.showSavedSites.disabled = factory.domCache.reload.disabled = factory.domCache.back.disabled = factory.domCache.forward.disabled = factory.domCache.openBrowser.disabled = true;
		};
	};


	// Of course, start your journey.
	acode.setPluginInit(factory.packageId, (baseDir, $page) => fetch(acode.joinUrl(baseDir, "plugin.json")).then(request => {
		// Check situation.
		if (! request.ok) throw new Error("HTTP code: " + request.status);

		// Parse text file.
		return request.json();
	}).then(result => {
		// Detach first piece, then other works.
		const forename = result.name.trim().split(/\s+/)[0], cssNode = document.createElement("link"), allSavedSites = $config("bookmarks", true);

		// Autism is live even in virtual worlds.
		Object.assign(factory, {
			"allSavedSites": (() => new Proxy({...allSavedSites.accessItem()}, {
				set(target, key, value) {
					// Assign it.
					target[key] = value;
					// Push it.
					allSavedSites.accessItem({...target});

					return true;
				},
				deleteProperty(target, key) {
					delete target[key];

					// My way, of saving collection!
					if (Object.keys(target).length) allSavedSites.accessItem({...target});
					else allSavedSites.removeItem();

					return true;
				}
			}))(),
			"myPage": $page,
			"homepage": $config("homepage", true),
			"proxyPath": acode.joinUrl(baseDir, "src/proxy.html") + "?=",
			"recentTabs": $config("recentTabs")
		});

		// Come back after winning the world, go go!
		window.handleNavigation = handleNavigation;

		// Umm... packing bag?
		// I really don't know, what to say now...
		cssNode.rel = "stylesheet";
		cssNode.href = acode.joinUrl(baseDir, "src/ui.css");

		// A lipstick? Take it, and be aesthetic.
		// Fuuu... but don't be like boring girls.
		document.head.appendChild(cssNode);

		// For now: use their product instead.
		if (! normalizeURI(factory.homepage.accessItem()?.url)) {
			factory.homepage.accessItem({
				"title": "Google Search",
				"url": "https://www.google.com/webhp?igu=1"
			});

			// Attention please!
			acode.alert("WARNING", "Cache database for both In-App Browser and " + forename + " are different, maybe somewhere progress may need to be redone.");
		};

		// Could be its first initialization.
		acode.require("tutorial")("iframe-guide", hide => {
			const container = document.createElement("div"), header = document.createElement("h3"), description = document.createElement("div"), button = document.createElement("button"), tour = {
				"header": ["Welcome", "Tab management", "Bookmarks", "Embed support", "Limitations"],
				"description": ["Hey buddy, thanks much for downloading. Ready to go?", `Excluding opened files, up to three tabs can be added using the <img class="demo-icon iframe-guide" src="${acode.joinUrl(baseDir, "img/add.svg")}"/> button.`, "Open your desired link (normally or via Proxy), then it may be saved under a name.", "Even playing video/playlist (or music in background) is also supported. Find in mobile Apps, copy link and open here to watch alongside coding.", "Enabling Proxy helps, thought dynamic sites, like Facebook is impossible to load. But still obviously it's great for most cases."],
				"btnLabl": ["Yeah!", "Next",,, "Start browsing"],
				"step": -1
			};

			button.addEventListener("click", function () {
				// What's next?
				const index = ++ tour.step;
				let emptyFields = 0;

				// Oh, I understood.
				header.innerText = tour.header[index] || ++ emptyFields && header.innerText;
				description.innerHTML = tour.description[index] || ++ emptyFields && description.innerHTML;
				this.innerText = tour.btnLabl[index] || ++ emptyFields && this.innerText;

				// Do you wanna end this here?
				if (emptyFields === 3) {
					// What about watching a reel? Not gonna be addictive, really, see:

					hide();
					createTab("User Guide");
					handleNavigation("go", "https://m.youtube.com/shorts/vrxlJQXv-5A");
				};
			});
			container.append(header, document.createElement("br"), description, document.createElement("br"), button);
			button.click();

			return container;
		});

		// Brand our little product.
		acode.addIcon(forename.toLowerCase(), acode.joinUrl(baseDir, result.icon));

		// Attach the watcher.
		document.addEventListener("click", function callbackFunction() {
			// Ahh, here you're!
			factory.domCache.menuBtn = document.querySelector("span.icon.menu[action='toggle-sidebar']");

			if (factory.domCache.menuBtn) {
				this.removeEventListener("click", callbackFunction);
				factory.domCache.menuBtn.addEventListener("click", _interactionWatcher);
			};
		});

		// Pick up broom and side dead bodies.
		factory.recentTabs.accessItem()?.forEach?.(id => editorManager.files.forEach(identifier => identifier.id === id && identifier.remove(true, {
			"ignorePinned": true // Force close without save prompt with bypassing pinned check.
		})));
		factory.recentTabs.removeItem();

		// Listen for future tab switches to show/hide sessions + start/stop panel popup watching.
		// Fastest looking up for live tabs structure, just single passing, no extra tricks.
		editorManager.on("switch-file", property => setTimeout(() => {
			Object.keys(factory.totalTabs).forEach(identifier => factory.totalTabs[identifier].container.style.visibility = "hidden");

			factory.activeTab = factory.totalTabs[property.id];

			if (factory.activeTab) {
				factory.activeTab.container.style.visibility = "visible";

				// Mark it boldly, I don't care if you're gonna assume me as, very haughty...
				if (editorManager.header.subText === "New file") editorManager.header.subText = factory.activeTab.subText || result.name;
			};
		}));

		// None said to flex with complications, just fix memory leaking and optimize performance.
		// Advantage: Not ours? Don't touch that = zero reflow cost.

		// Clean up if the user closes our tab.
		editorManager.on("remove-file", property => {
			// End session automatically.
			factory.totalTabs[property.id]?.container?.remove();

			// Unregister dead island.
			delete factory.totalTabs[property.id];
		});

		// Shoot.
		Sidebar.add(forename.toLowerCase(), factory.packageId, forename, container => container.innerHTML = `
			<div class="top-section iframe-sidebar">
				<span class="icon"><img/></span>
				<input type="text" dir="auto" placeholder="Enter address to browse"/>
				<button><img src="${acode.joinUrl(baseDir, "img/enter.svg")}"/></button>
			</div>
			<br/>
			<button class="long-size iframe-sidebar">Change my HomePage</button>
			<button class="long-size iframe-sidebar">Go to copied URL</button>
			<button class="long-size iframe-sidebar">Open saved sites list</button>
			<br/>
			<br/>
			<div class="middle-section iframe-sidebar">
				<div>
					<span>Bypass paywall mode</span>
					<label class="switch">
						<input type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
				<div>
					<span>Autoplay videos</span>
					<label class="switch">
						<input type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
				<div>
					<span>Start muted</span>
					<label class="switch">
						<input type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
				<div>
					<span>Loop playlist</span>
					<label class="switch">
						<input type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
				<div>
					<span>Frame sandboxing</span>
					<label class="switch">
						<input type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
			</div>
			<div class="bottom-section iframe-sidebar">
				<button><img src="${acode.joinUrl(baseDir, "img/add.svg")}"/></button>
				<button><img src="${acode.joinUrl(baseDir, "img/reload.svg")}"/></button>
				<button action="back"><img src="${acode.joinUrl(baseDir, "img/back.svg")}"/></button>
				<button action="forward"><img src="${acode.joinUrl(baseDir, "img/forward.svg")}"/></button>
				<button><img src="${acode.joinUrl(baseDir, "img/external-link.svg")}"/></button>
			</div>
		`, false, updateControlStates);

		// From now, until you knock me, ain't gonna make more features.
	}).catch(error => {
		// Sorry to hear.
		acode.alert("ERROR", "Skipped process due to execution failure.");

		// Sad.
		throw new Error("Unexpected occurrence: " + error.stack);
	}));

	// Goodnight friend, meet me at the end.
	acode.setPluginUnmount(factory.packageId, () => {
		// Last line is being deleted from here:
		// Alas! My one week is successfully wasted btw.
		Sidebar.remove(factory.packageId);

		// Detach all watchers.
		factory.domCache.menuBtn.removeEventListener("click", _interactionWatcher);
		factory.myPage.removeEventListener("click", manageSavedSites);

		// Strike down temporarily for next launch.
		factory.domCache.defined = false;
	});

	// Yo, polishing completed. And in bonus, electron saver version is ready.
	// Leave star, then wait for more inventions. Gotta take a power nap. See yah!
})();