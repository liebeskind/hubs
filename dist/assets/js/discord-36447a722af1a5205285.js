!function(e){function o(o){for(var r,i,s=o[0],c=o[1],d=o[2],m=0,u=[];m<s.length;m++)i=s[m],n[i]&&u.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(o);u.length;)u.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,o=0;o<a.length;o++){for(var t=a[o],r=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(r=!1)}r&&(a.splice(o--,1),e=i(i.s=t[0]))}return e}var r={},n={5:0},a=[];function i(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)i.d(t,r,function(o){return e[o]}.bind(null,r));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var d=0;d<s.length;d++)o(s[d]);var l=c;a.push([1590,0]),t()}({1066:function(e,o,t){e.exports=t.p+"assets/images/discord-bot-logo-2db439e8afff4dc7f91f45e420333421.png"},1067:function(e,o,t){e.exports=t.p+"assets/images/discord-bot-splash-cac48e658f6a9648ac0ff77e6cbb273b.png"},1590:function(e,o,t){"use strict";t.r(o);var r=t(38),n=t.n(r),a=t(0),i=t.n(a),s=t(4),c=t(2089),d=t.n(c),l=t(1066),m=t.n(l),u=t(1067),p=t.n(u),_=t(73),h=t(137),b=t.n(h),g=t(35);Object(_.a)("/discord","Discord Landing Page"),Object(s.c)([...b.a]);const v="https://forms.gle/GGPgarSuY5WaTNCT8";class y extends a.Component{componentDidMount(){}render(){return i.a.createElement(s.b,{locale:g.a,messages:g.b},i.a.createElement("div",{className:d.a.ui},i.a.createElement("div",{className:d.a.header},i.a.createElement("div",{className:d.a.headerLinks},i.a.createElement("a",{href:"/",rel:"noreferrer noopener"},"Try Hubs"),i.a.createElement("a",{href:"https://discord.gg/wHmY4nd",rel:"noreferrer noopener"},i.a.createElement(s.a,{id:"discord.community_link"})))),i.a.createElement("div",{className:d.a.content},i.a.createElement("div",{className:d.a.heroPane},i.a.createElement("div",{className:d.a.heroMessage},i.a.createElement("div",{className:d.a.discordLogo},i.a.createElement("img",{src:m.a})),i.a.createElement("div",{className:d.a.primaryTagline},i.a.createElement(s.a,{id:"discord.primary_tagline"})),i.a.createElement("div",{className:d.a.secondaryTagline},i.a.createElement(s.a,{id:"discord.secondary_tagline"})),i.a.createElement("div",{className:d.a.actionButtons},i.a.createElement("a",{href:v,className:d.a.downloadButton},i.a.createElement("div",null,i.a.createElement(s.a,{id:"discord.contact_us"}))))),i.a.createElement("div",{className:d.a.heroSplash},i.a.createElement("img",{src:p.a}),i.a.createElement("div",{className:d.a.splashTagline},i.a.createElement(s.a,{id:"discord.splash_tag"}))))),i.a.createElement("div",{className:d.a.bg})))}}document.addEventListener("DOMContentLoaded",()=>{n.a.render(i.a.createElement(y,null),document.getElementById("ui-root"))})},185:function(e,o){},20:function(e,o,t){"use strict";t.d(o,"b",function(){return s}),t.d(o,"a",function(){return c}),t.d(o,"c",function(){return d});var r=t(69),n=t.n(r);function a(e,o,t,r,n,a,i){try{var s=e[a](i),c=s.value}catch(e){return void t(e)}s.done?o(c):Promise.resolve(c).then(r,n)}n.a.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyOHSVeLr3ryLrL5"});const i=n.a.base("appIR0AlHDFG5WR8z"),s={DarkLogo:null,Name:null,Icon:null},c=i("Assets"),d=i("Messages").select({view:"Grid view"}).firstPage(function(){var e,o=(e=function*(e,o){if(!e)return o[0];console.error(e)},function(){var o=this,t=arguments;return new Promise(function(r,n){var i=e.apply(o,t);function s(e){a(i,r,n,s,c,"next",e)}function c(e){a(i,r,n,s,c,"throw",e)}s(void 0)})});return function(e,t){return o.apply(this,arguments)}}())},2089:function(e,o){e.exports={"download-button":"discord__download-button__2D29f",downloadButton:"discord__download-button__2D29f","play-button":"discord__play-button__3KFrs",playButton:"discord__play-button__3KFrs","close-video":"discord__close-video__mo0qN",closeVideo:"discord__close-video__mo0qN","loading-text":"discord__loading-text__1rNzQ",loadingText:"discord__loading-text__1rNzQ",bg:"discord__bg__1Eppr",ui:"discord__ui__3A-5o",content:"discord__content__1Zv_7",header:"discord__header__2A9LE","header-links":"discord__header-links__3ZNRt",headerLinks:"discord__header-links__3ZNRt","hero-pane":"discord__hero-pane__2L8gu",heroPane:"discord__hero-pane__2L8gu","discord-logo":"discord__discord-logo__3rbJA",discordLogo:"discord__discord-logo__3rbJA","primary-tagline":"discord__primary-tagline__2TWHV",primaryTagline:"discord__primary-tagline__2TWHV","secondary-tagline":"discord__secondary-tagline__3d0UA",secondaryTagline:"discord__secondary-tagline__3d0UA","hero-message":"discord__hero-message__3VOU2",heroMessage:"discord__hero-message__3VOU2","hero-splash":"discord__hero-splash__1MVRz",heroSplash:"discord__hero-splash__1MVRz","splash-tagline":"discord__splash-tagline__3xv4M",splashTagline:"discord__splash-tagline__3xv4M","preview-video":"discord__preview-video__1QQXY",previewVideo:"discord__preview-video__1QQXY","tutorial-buttons":"discord__tutorial-buttons__3Ycm7",tutorialButtons:"discord__tutorial-buttons__3Ycm7","browse-versions":"discord__browse-versions__Csh-_",browseVersions:"discord__browse-versions__Csh-_","thank-you":"discord__thank-you__2Nec7",thankYou:"discord__thank-you__2Nec7","player-overlay":"discord__player-overlay__1D0s7",playerOverlay:"discord__player-overlay__1D0s7","player-content":"discord__player-content__2QrNV",playerContent:"discord__player-content__2QrNV","player-video":"discord__player-video__2JiDD",playerVideo:"discord__player-video__2JiDD",attribution:"discord__attribution__1AS4E"}},218:function(e,o){},219:function(e,o){},35:function(e,o,t){"use strict";var r=t(20);console.log(r.c);var n={en:{"auth.verified-title":"E-Mail Verified!","auth.verified":"Your email has been verified!\nYou can now close this browser tab and return to Hubs.","auth.spoke-verified":"You email has been verified!\nYou can now close this browser tab and return to Spoke.","sign-in.prompt":"Sign in to pin objects in rooms.","sign-in.auth-started":"Email sent!\n\nTo continue, go click on the link in the email using your phone, tablet, or PC.","sign-in.pin":"You'll need to sign in to pin objects.","sign-in.pin-complete":"You are now signed in.","sign-in.unpin":"You'll need to sign in to un-pin objects.","sign-in.unpin-complete":"You are now signed in.","sign-in.change-scene":"You'll need to sign in to change the scene.","sign-in.change-scene-complete":"You are now signed in.","sign-in.rename-room":"You'll need to sign in to rename axon park.","sign-in.rename-room-complete":"You are now signed in.","sign-in.close-room":"You'll need to sign in to close axon park.","sign-in.close-room-complete":"You are now signed in.","sign-in.mute-user":"You'll need to sign in to mute other users.","sign-in.mute-user-complete":"You are now signed in.","sign-in.kick-user":"You'll need to sign in to kick other users.","sign-in.kick-user-complete":"You are now signed in.","sign-in.create-avatar":"You'll need to sign in to create avatars.","sign-in.create-avatar-complete":"You are now signed in.","sign-in.favorite-room":"You'll need to sign in to add this room to your favorites.","sign-in.favorite-rooms":"You'll need to sign in to add favorite rooms.","sign-in.favorite-room-complete":"You are now signed in.","sign-in.favorite-rooms-complete":"You are now signed in.","sign-in.as":"Signed in as","sign-in.in":"Sign In","sign-in.out":"Sign Out","rename-room.message":"Enter the new name for axon park.","rename-room.rename":"Rename Axon Park","close-room.message":"Closing this room will remove yourself and others from axon park, shutting it down permanently.\n\nAre you sure? This action cannot be undone.","close-room.confirm":"Yes, Close Axon Park","close-room.cancel":"Cancel","entry.room":"Immersive Education","entry.enter-room-title":"Lobby","entry.enter-room":"enter or send to device","entry.leave-room":"Leave Axon Park","entry.change-scene":"Choose a Scene","entry.in-lobby-notice":"You are viewing Axon Park from the lobby.","entry.screen-prefix":"Enter on ","entry.desktop-screen":"Screen","entry.mobile-screen":"Phone","entry.mobile-safari":"Safari","entry.generic-prefix":" ","entry.generic-medium":"Connected VR Headset","entry.generic-subtitle-desktop":"Oculus or SteamVR","entry.gearvr-prefix":"Enter on ","entry.gearvr-medium":"Gear VR","entry.choose-device":"Choose Device","entry.device-medium":"Send to Device","entry.device-subtitle-desktop":"Standalone VR or Phone","entry.device-subtitle-mobile":"Standalone VR or PC","entry.device-subtitle-vr":"Phone or PC","entry.cardboard":"Enter on Google Cardboard","entry.daydream-prefix":"Enter on ","entry.daydream-medium":"Daydream","entry.daydream-via-chrome":"Using Google Chrome","entry.invite-others":"invite others","entry.share-button":"share","entry.desktop.invite-tip":"Nobody is here yet. Share this room to get together.","entry.mobile.invite-tip":"Share to get together.","entry.invite-team-nag":"Invite a hubs team member","entry.enable-screen-sharing":"Share my desktop","entry.return-to-vr":"Return to VR","entry.enter-in-vr":"Enter in VR","entry.open-in-window":"Open in Tab","entry.lobby":"Lobby","entry.back":"Back","entry.notify_me":"Notify me when others arrive","entry.mute-on-entry":"Mute my microphone","profile.save":"Accept","profile.display_name.validation_warning":"Alphanumerics and hyphens. At least 3 characters, no more than 32","profile.header":"Name & Avatar","profile.terms_of_use":"Terms of Use","profile.privacy_notice":"Privacy Notice","profile.choose_avatar":"Browse Avatars","profile.tabs.legacy":"Default","profile.tabs.skinnable":"Custom Skin","profile.tabs.url":"Custom Model","profile.info":"Resources for creating custom avatar models can be found","profile.info-link":"here","avatar-editor.info":"Resources for creating custom avatar skins can be found","avatar-editor.info-link":"here","avatar-preview.loading-failed":"Loading failed\nPlease choose another avatar","media-browser.search-placeholder.scenes":"Search Scenes...","media-browser.search-placeholder.avatars":"Search Avatars...","media-browser.search-placeholder.videos":"Search the web...","media-browser.search-placeholder.images":"Search the web...","media-browser.search-placeholder.youtube":"Search for videos...","media-browser.search-placeholder.gifs":"Search for GIFs...","media-browser.search-placeholder.twitch":"Search for streams...","media-browser.search-placeholder.sketchfab":"Search for models...","media-browser.search-placeholder.poly":"Search for models...","media-browser.search-placeholder.base":"Search...","media-browser.favorites-header":"Favorite Rooms","media-browser.add_custom_object":"Custom URL or File","media-browser.add_custom_scene":"Custom Scene","media-browser.add_custom_avatar":"Avatar GLB URL","media-browser.privacy_policy":"Privacy Policy","media-browser.spoke":"Spoke","media-browser.report_issue":"Report Issue","media-browser.powered_by.images":"Search by Bing | ","media-browser.powered_by.videos":"Search by Bing | ","media-browser.powered_by.youtube":"Search by Google | ","media-browser.powered_by.gifs":"Search by Tenor | ","media-browser.powered_by.sketchfab":"Search by Sketchfab | ","media-browser.powered_by.poly":"Search by Google | ","media-browser.powered_by.twitch":"Search by Twitch | ","media-browser.powered_by.scenes":"Made with ","media-browser.powered_by.avatars":" ","media-browser.empty.images":"No results. Try entering a new search above.","media-browser.empty.videos":"No results. Try entering a new search above.","media-browser.empty.youtube":"No results. Try entering a new search above.","media-browser.empty.gifs":"No result. Try entering a new search above.","media-browser.empty.sketchfab":"No results. Try entering a new search above.","media-browser.empty.poly":"No results. Try entering a new search above.","media-browser.empty.twitch":"No results. Try entering a new search above.","media-browser.empty.favorites":"You don't have any favorites. Click a ⭐ to add to your favorites.","media-browser.nav_title.youtube":"YouTube","media-browser.nav_title.videos":"Videos","media-browser.nav_title.images":"Images","media-browser.nav_title.gifs":"GIFs","media-browser.nav_title.scenes":"Scenes","media-browser.nav_title.avatars":"Avatars","media-browser.nav_title.sketchfab":"Sketchfab","media-browser.nav_title.poly":"Google Poly","media-browser.nav_title.twitch":"Twitch","media-browser.create-avatar":"Create Avatar","media-browser.create-scene":"Create Scene with Spoke","media-browser.hub.joined-prefix":"Joined ","media-browser.hub.joined-prefix":"Visited ","audio.title":"Audio Setup","audio.talk_to_test":"talk","audio.click_to_test":"click","audio.subtitle-desktop":"Confirm HMD speaker output","audio.subtitle-mobile":"Earphones are recommended","audio.enter-now":"Enter Now","audio.hmd-mic-warning":"Your HMD mic is not chosen","audio.grant-title":"Grant mic permissions","audio.grant-subtitle":"Mic access needed to be heard by others","audio.granted-title":"Mic permissions granted","audio.granted-subtitle":"You can still mute yourself in-game","audio.granted-next":"Next","exit.subtitle.exited":"Your session has ended. Refresh your browser to start a new one.","exit.subtitle.closed":"This room is no longer available.","exit.subtitle.denied":"You are not permitted to join this room. Please request permission from the room creator.","exit.subtitle.kicked":"You have been kicked from axon park.","exit.subtitle.left":"You have left axon park.","exit.subtitle.full":"This room is full, please try again later.","exit.subtitle.connect_error":"Unable to connect to this room, please try again later.","exit.subtitle.version_mismatch":"The version you deployed is not available yet. Your browser will refresh in 5 seconds.","autoexit.title":"Auto-ending session in ","autoexit.title_units":" seconds","autoexit.subtitle":"You have started another session.","autoexit.cancel":"CANCEL","presence.entered_room":"entered axon park.","presence.entered_lobby":"entered axon park's lobby.","presence.join_lobby":"joined the axon park lobby.","presence.join_room":"joined axon park.","presence.leave":"left.","presence.name_change":"is now known as","presence.scene_change":"changed the scene to","presence.hub_name_change":"changed the name of the room to","presence.in_lobby":"Axon Park Lobby","presence.in_room":"In Axon Park","home.create_a_room":"Initialize Axon Park","home.desktop.add_pwa":"Install Desktop App","home.mobile.add_pwa":"Add to Home Screen","home.take_a_tour":"Take a Tour","home.room_create_options":"options","home.room_create_button":"Initialize Axon Park","home.create_name.validation_warning":"Invalid name, limited to 4 to 64 characters and limited symbols.","home.join_us":"Join the Conversation","home.have_code":"Have an axon park code?","home.add_to_discord_1":"Add the","home.add_to_discord_2":"Hubs Bot","home.add_to_discord_3":"to Discord","home.create_with_spoke":"Create a Scene","home.report_issue":"Report Issues","home.source_link":"Source","home.whats_new_link":"What's New","home.spoke_link":"Spoke","home.about_link":"About","home.community_link":"Community","home.privacy_notice":"Privacy Notice","home.terms_of_use":"Terms of Use","home.get_updates":"Get Updates","home.hero_title":"A new way to get together","home.hero_blurb":r.c&&r.c.get("Motto")||"Learn together, from anywhere.\nThe future of learning is virtual.\nEqualizing access to premier quality education.","home.made_with_love":"made with 🦆 by ","home.environment_author_by":" by ","dialog.close":"close","mailing_list.privacy_label":"I'm okay with Mozilla handling my info as explained in","mailing_list.privacy_link":"this Privacy Notice","link.link_page_header_entry":"Enter your code:","link.link_page_header_headset":"Enter Send to Device code:","link.linking_a_headset":"Have a letter code?","link.try_again":"We couldn't find that code.\nPlease try again.","help.report_issue":"Report an Issue","scene.logo_tagline":"A new way to get together","scene.create_button":"Create a room with this scene","scene.tweet_button":"Share on Twitter","scene.unavailable":"This scene is no longer available.","link.in_your_browser":"In your device's web browser, go to:","link.enter_code":"Then, enter this one-time letter code:","link.do_not_close":"Your account and avatar will be transferred to the device.\nKeep this page open to use this code.","link.connect_headset":"Send to Device","link.cancel":"cancel","invite.enter_via":"Enter via ","invite.enter_via_modal":"Others may enter via ","invite.tweet":"tweet","invite.and_enter_code":" with code:","invite.or_visit":"or share permalink","invite.or_visit_modal":"or by visiting permalink","invite.embed":"or embed on a page","invite.embed-tip":"Please be mindful of where you embed a Hubs room.\nAnyone who can access the page can enter and create/remove objects.","spoke.primary_tagline":"make your space","spoke.secondary_tagline":"Create 3D social scenes for ","spoke.thank_you":"Thank you for downloading Spoke!","spoke.download_win":"Download for Windows","spoke.download_macos":"Download for Mac","spoke.download_linux":"Download for Linux","spoke.download_unsupported":"View Releases","spoke.browse_all_versions":"Browse All Versions","spoke.beginner_tutorial_button":"Learn Spoke in 5 Minutes","spoke.advanced_tutorial_button":"Advanced Spoke in 10 minutes","spoke.play_button":"Learn Spoke in 5 Minutes","commands.fly":"Toggle fly mode.","commands.grow":"Increase your avatar's size.","commands.shrink":"Decrease your avatar's size.","commands.scene":"Change the scene.","commands.rename":"Rename the room.","commands.help":"Show help.","commands.leave":"Disconnect from axon park.","commands.duck":"The duck tested well. Quack.","commands.capture":"Capture a 15 second video.","commands.debug":"Toggle physics debug rendering.","commands.vrstats":"Toggle stats in VR.","settings.change-avatar":"Set Name & Avatar","settings.change-scene":"Choose a Scene","settings.favorites":"Favorite Rooms","settings.rename-room":"Set Axon Park Name...","settings.close-room":"Close Axon Park...","settings.room-info":"Axon Park Info","settings.create-room":"New Axon Park...","settings.create-scene":"Get Spoke","settings.send-feedback":"Send Feedback","settings.whats-new":"What's New","settings.features":"Help","settings.controls":"Controls","settings.community":"Join Discord","settings.tips":"Show Tips","settings.report":"Report Issue","settings.terms":"Terms of Use","settings.privacy":"Privacy Notice","settings.help":"Help","settings.row-profile":"You","settings.row-room":"Axon Park","tips.mobile.video_share_mode":"Tap to stop sharing video.","tips.mobile.pen_mode":"Tap icon again to end drawing.","tips.mobile.mute_mode":"You are muted. Tap to unmute.","tips.mobile.freeze_mode":"Two-finger tap to hide menus.","tips.mobile.look":"Welcome! 👋 Tap and drag to look around.","tips.mobile.locomotion":"Great! To move, pinch with two fingers.","tips.mobile.spawn_menu-pre":"Use the ","tips.mobile.spawn_menu-post":"at the top to create objects.","tips.mobile.freeze_gesture":"Two-finger tap to show menus.","tips.mobile.object_grab":"Drag an object to move or throw it.","tips.mobile.object_rotate_button-pre":"Tap and drag ","tips.mobile.object_rotate_button-post":" to rotate.","tips.mobile.object_scale_button-pre":"Tap and drag ","tips.mobile.object_scale_button-post":" to scale.","tips.mobile.object_recenter_button-pre":"Tap ","tips.mobile.object_recenter_button-post":" to have the object face you.","tips.mobile.object_pin":"Pin an object to save it to axon park.","tips.mobile.object_pin":"Pin an object to save it to axon park.","tips.mobile.invite":"Use the Invite button to share axon park.","tips.desktop.video_share_mode":"You're streaming. Select again to stop sharing video.","tips.desktop.pen_mode":"Press ESC or right click to drop pen. Ctrl-Z to undo.","tips.desktop.mirror_mode":"Press ESC to end camera mirroring.","tips.desktop.mute_mode":"You are muted. Click or press M to un-mute.","tips.desktop.look":"Welcome to Hubs! 👋 Click and drag to look around.","tips.desktop.locomotion":"Great! Now, use the W A S D keys to move. Hold shift to boost.","tips.desktop.turning":"Perfect. Use the Q and E keys to rotate.","tips.desktop.spawn_menu-pre":"To create objects, click the ","tips.desktop.spawn_menu-post":"button at the top of the screen, or press Ctrl 1 through 7.","tips.desktop.freeze_gesture":"Press and hold spacebar to show object menus.","tips.desktop.menu_hover":"Now, point the cursor at an object to show the menu.","tips.desktop.object_grab":"Click and drag an object to move it. Or, flick to throw it!","tips.desktop.object_pin":"Pin an object to save it to axon park.","tips.desktop.object_zoom":"Scroll to move this object towards and away from you.","tips.desktop.object_rotate_button-pre":"Click and drag ","tips.desktop.object_rotate_button-post":" to rotate the object.","tips.desktop.object_scale_button-pre":"Click and drag ","tips.desktop.object_scale_button-post":" to scale the object.","tips.desktop.object_recenter_button-pre":"Click ","tips.desktop.object_recenter_button-post":" to rotate the object to face you. Helpful if you drop it!","tips.desktop.object_scale":"Hold shift and scroll to scale it bigger and smaller.","tips.desktop.pen_color":"Use Shift-Q and Shift-E to change the pen color.","tips.desktop.pen_size":"Hold Shift and scroll to change the pen size.","tips.desktop.invite":"Nobody else is here. Use the Share button at the top to share this room.","tips.desktop.watching":"You're in the lobby. Others cannot see or hear you.","tips.watching.back":"Enter Room","tips.mobile.watching":"You're in the lobby.","tips.watching-exit":"Back","loader.entering_lobby":"Entering lobby...","loader.loading":"Loading ","loader.object":"object","loader.objects":"objects","change-scene-dialog.change-scene":"Change Scene","change-scene-dialog.create-in-spoke":"Or, create a new scene using Spoke.","change-scene-dialog.new-spoke-project":"Launch Spoke","avatar-url-dialog.apply":"Apply","interstitial.prompt":"Continue","feedback.prompt":"Feedback","hide-ui.prompt":"Hide All","discord.primary_tagline":"Share a virtual room with your community.\nWatch videos, play with 3D objects, or just hang out.","discord.secondary_tagline":"No downloads or sign up. Full VR support too.","discord.contact_us":"Invite Bot to Server","discord.community_link":"Hubs Discord","discord.splash_tag":"Designed for serious businessing.","client-info.kick-button":"Kick","client-info.hide-button":"Hide","client-info.unhide-button":"Un-hide ","client-info.mute-button":"Mute","client-info.cancel":"Cancel","avatar-landing.select":"Select","avatar-landing.selected":"This is your current avatar","leave-room-dialog.join-room.message":"Joining a new room will leave this one. Are you sure?","leave-room-dialog.join-room.confirm":"Join Room","leave-room-dialog.create-room.message":"Creating a new room will leave this one. Are you sure?","leave-room-dialog.create-room.confirm":"Leave Room","embed.load-button":"Load Room","embed.presence-warning":"This room is embedded, so may be visible to visitors on other websites."}};t.d(o,"a",function(){return i}),t.d(o,"b",function(){return s});const a=(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage).toLowerCase().split(/[_-]+/)[0],i=n[a]&&a||"en",s=n[i]||n.en},73:function(e,o,t){"use strict";t.d(o,"a",function(){return i});var r=t(108),n=t.n(r);const a=window.ga;function i(e,o){const t={NODE_ENV:"production",DEFAULT_SCENE_SID:"JGLt8DP",RETICULUM_SERVER:"dev.reticulum.io",FARSPARK_SERVER:"farspark-dev.reticulum.io",NON_CORS_PROXY_DOMAINS:"hubs.local,dev.reticulum.io",ASSET_BUNDLE_SERVER:"https://asset-bundles-prod.reticulum.io",EXTRA_ENVIRONMENTS:"",POSTGREST_SERVER:"hubs.local:3000"}.SENTRY_DSN,r={NODE_ENV:"production",DEFAULT_SCENE_SID:"JGLt8DP",RETICULUM_SERVER:"dev.reticulum.io",FARSPARK_SERVER:"farspark-dev.reticulum.io",NON_CORS_PROXY_DOMAINS:"hubs.local,dev.reticulum.io",ASSET_BUNDLE_SERVER:"https://asset-bundles-prod.reticulum.io",EXTRA_ENVIRONMENTS:"",POSTGREST_SERVER:"hubs.local:3000"}.GA_TRACKING_ID;t&&(console.log("Tracking: Sentry DSN: "+t),n.a.config(t).install()),a&&r&&(console.log("Tracking: Google Analytics ID: "+r),a("create",r,"auto"),e&&a("set","page",e),o&&a("set","title",o),a("send","pageview"))}}});
//# sourceMappingURL=discord-36447a722af1a5205285.js.map