---
layout: post
title: QtWebKit.experimental
---
If you look at the [docs for QtWebView](http://webkitgtk.org/reference/webkitgtk/stable/webkitgtk-webkitwebview.html), you'll notice that they're rather paltry.  Certainly, they're much shorter than the equivalent [GTK docs](http://webkitgtk.org/reference/webkitgtk/stable/webkitgtk-webkitwebview.html).  All sorts of things are missing.  Critically, from the point of view of developing a app that uses a WebView, there's no way to send signals into the WebView (*cf.* [webkit_web_view_execute_script](http://webkitgtk.org/reference/webkitgtk/stable/webkitgtk-webkitwebview.html#webkit-web-view-execute-script)).

Those of you familiar with Qt might note that QWebView is [significantly more featureful](http://qt-project.org/doc/qt-5.0/qtwebkit/qwebview.html).  But QWebView is a Qt widget, not a Qt *Quick* widget, and never the twain shall meet.  Well, except in [Qt4.7](http://stackoverflow.com/questions/13014415/qt5-embed-qwidget-object-in-qml).  And again in [Qt5.1](http://www.ics.com/blog/combining-qt-widgets-and-qml-qwidgetcreatewindowcontainer).  So actually, it's only those of us stuck with Qt5 that have a problem.


But we're not out of luck.  There's a secret module that includes many of these features.  All you have to do is `import QtWebKit.experimental 1.0`, and your WebView gains super powers.  This isn't documented anywhere, as far as I can tell, because then it wouldn't be a *secret*.  (Jono Bacon [recently raved](http://www.jonobacon.org/2013/08/22/ubuntu-in-a-nutshell-the-ubuntu-sdk-and-developer-story/), "Qt and QML documentation is *fantastic*."  What he meant was that you will fantasize about it existing.)  Still, I've found [a few](https://gist.github.com/jturcotte/4986536) [good examples](https://qt.gitorious.org/qt-apps/snowshoe/blobs/master/src/desktop/qml/PageWidget.qml) of its use.  There's a [test suite](https://github.com/WebKit/webkit/tree/master/Source/WebKit2/UIProcess/API/qt/tests/qmltests/WebView) that shows off a bunch of features.

Not all of it works, however.  This [example of messaging passing](http://stackoverflow.com/questions/14342220/invoke-c-method-from-webviews-javascript/14365144#14365144) just didn't work for me.  But `WebView.experimental.evaluateJavaScript()` did, and that was enough for me to set up communication with the WebView.  Communication the other way can be done by changing the title of the WebView; [this commit](https://github.com/rschroll/beru/commit/ac3336f620a8da8b384d4e999e9ac43cc51b369d) shows how.

Using introspection, I got all of the properties of `WebView.experimental` and `WebView.experimental.preferences`.  I list them below.  Hopefully the exposure of their secrets won't anger the QtWebKit Illuminati too much.

### WebView.experimental
* proxyAuthenticationDialog
* userAgent
* preferredMinimumContentsWidth
* confirmDialog
* promptDialog
* deviceWidth
* authenticationDialog
* page
* databaseQuotaDialog
* itemSelector
* devicePixelRatio
* transparentBackground
* useDefaultContentItemSize
* filePicker
* navigationHistory
* preferences
* deviceHeight
* test
* objectName
* colorChooser
* certificateVerificationDialog
* alertDialog
* remoteInspectorUrl
* userScripts
* urlSchemeDelegates
* evaluateJavaScript
* evaluateJavaScript
* postMessage
* goForwardTo
* goBackTo
* onRemoteInspectorUrlChanged
* remoteInspectorUrlChanged
* onPreferredMinimumContentsWidthChanged
* preferredMinimumContentsWidthChanged
* onUserScriptsChanged
* userScriptsChanged
* onExitFullScreenRequested
* exitFullScreenRequested
* onEnterFullScreenRequested
* enterFullScreenRequested
* onDeviceHeightChanged
* deviceHeightChanged
* onDevicePixelRatioChanged
* devicePixelRatioChanged
* onDeviceWidthChanged
* deviceWidthChanged
* onUserAgentChanged
* userAgentChanged
* onProxyAuthenticationDialogChanged
* proxyAuthenticationDialogChanged
* onMessageReceived
* messageReceived
* onPermissionRequested
* permissionRequested
* onDownloadRequested
* downloadRequested
* onColorChooserChanged
* colorChooserChanged
* onDatabaseQuotaDialogChanged
* databaseQuotaDialogChanged
* onFilePickerChanged
* filePickerChanged
* onItemSelectorChanged
* itemSelectorChanged
* onCertificateVerificationDialogChanged
* certificateVerificationDialogChanged
* onAuthenticationDialogChanged
* authenticationDialogChanged
* onPromptDialogChanged
* promptDialogChanged
* onConfirmDialogChanged
* confirmDialogChanged
* onAlertDialogChanged
* alertDialogChanged
* onLoadVisuallyCommitted
* loadVisuallyCommitted
* onObjectNameChanged
* objectNameChanged

### WebView.experimental.preferences
* fileAccessFromFileURLsAllowed
* serifFontFamily
* privateBrowsingEnabled
* notificationsEnabled
* fixedFontFamily
* webGLEnabled
* xssAuditingEnabled
* cursiveFontFamily
* javascriptEnabled
* sansSerifFontFamily
* defaultFontSize
* pluginsEnabled
* objectName
* universalAccessFromFileURLsAllowed
* dnsPrefetchEnabled
* webAudioEnabled
* frameFlatteningEnabled
* scrollAnimatorEnabled
* caretBrowsingEnabled
* fullScreenEnabled
* navigatorQtObjectEnabled
* defaultFixedFontSize
* offlineWebApplicationCacheEnabled
* autoLoadImages
* standardFontFamily
* fantasyFontFamily
* localStorageEnabled
* minimumFontSize
* developerExtrasEnabled
* onDefaultFixedFontSizeChanged
* defaultFixedFontSizeChanged
* onDefaultFontSizeChanged
* defaultFontSizeChanged
* onMinimumFontSizeChanged
* minimumFontSizeChanged
* onFantasyFontFamilyChanged
* fantasyFontFamilyChanged
* onCursiveFontFamilyChanged
* cursiveFontFamilyChanged
* onSansSerifFontFamilyChanged
* sansSerifFontFamilyChanged
* onSerifFontFamilyChanged
* serifFontFamilyChanged
* onFixedFontFamilyChanged
* fixedFontFamilyChanged
* onStandardFontFamilyChanged
* standardFontFamilyChanged
* onFileAccessFromFileURLsAllowedChanged
* fileAccessFromFileURLsAllowedChanged
* onUniversalAccessFromFileURLsAllowedChanged
* universalAccessFromFileURLsAllowedChanged
* onNotificationsEnabledChanged
* notificationsEnabledChanged
* onCaretBrowsingEnabledChanged
* caretBrowsingEnabledChanged
* onScrollAnimatorEnabledChanged
* scrollAnimatorEnabledChanged
* onWebAudioEnabledChanged
* webAudioEnabledChanged
* onWebGLEnabledChanged
* webGLEnabledChanged
* onDeveloperExtrasEnabledChanged
* developerExtrasEnabledChanged
* onFrameFlatteningEnabledChanged
* frameFlatteningEnabledChanged
* onNavigatorQtObjectEnabledChanged
* navigatorQtObjectEnabledChanged
* onDnsPrefetchEnabledChanged
* dnsPrefetchEnabledChanged
* onPrivateBrowsingEnabledChanged
* privateBrowsingEnabledChanged
* onXssAuditingEnabledChanged
* xssAuditingEnabledChanged
* onLocalStorageEnabledChanged
* localStorageEnabledChanged
* onOfflineWebApplicationCacheEnabledChanged
* offlineWebApplicationCacheEnabledChanged
* onJavascriptEnabledChanged
* javascriptEnabledChanged
* onFullScreenEnabledChanged
* fullScreenEnabledChanged
* onPluginsEnabledChanged
* pluginsEnabledChanged
* onAutoLoadImagesChanged
* autoLoadImagesChanged
* onObjectNameChanged
* objectNameChanged