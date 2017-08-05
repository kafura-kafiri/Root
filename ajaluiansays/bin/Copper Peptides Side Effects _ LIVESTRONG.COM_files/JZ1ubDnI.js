



/* ControlTag Loader for Leaf Group 66822801-aa35-4f0d-a6ab-78970028f03f */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.17.0","schema_version":3},"confid":"JZ1ubDnI","context_terms":[],"publisher":{"id":1628,"name":"Leaf Group","uuid":"66822801-aa35-4f0d-a6ab-78970028f03f","version_bucket":"steady","version_hash":"c9ec434df4b6649f3a798e8d03d40769"},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"dfp_premium":true},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"id":21631,"name":"livestrong.com"},"tags":[{"id":21001,"name":"DataLogix (e70bc6e8-7d66-460e-b96d-cee26cf41add)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=e70bc6e8-7d66-460e-b96d-cee26cf41add&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=oazw62oazwq13&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17980,"name":"Google user match","content":"<script>\r\n(function() {\r\n  if (Krux('get', 'user') != null) {\r\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n  }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17987,"name":"Rubicon Project usermatch ","content":"<script>\n(function(){\n  if (window.Krux) {\n    var kuid = window.Krux('get', 'user');\n    if (kuid && typeof kuid != 'undefined') {\n       var rubicon_url = '//tap.rubiconproject.com/oz/feeds/krux/tokens?afu=' + kuid;\n       var i = new Image();\n       i.src = rubicon_url;\n    }\n  }\n})();\n</script>","target":"","target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17991,"name":"LiveRamp user match","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":"","target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17992,"name":"xaxis user match ","content":"<script>\n(function(){     \n\tvar kuid = window.Krux('get', 'user');\n\tif (kuid) {\n\t     var min = 1000000000;\n\t     var max = 9999999999;\n\t     var rand = Math.floor(Math.random() * (max - min)) + min;\n\t     var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\n\t     var url = prefix \n\t               + '//t.mookie1.com/t/v1/event?migClientId=6726&migAction=krux&migSource=mig&migRandom='\n\t               + rand \n\t               +'&migParam1='\n\t               + kuid;\n\t     (new Image()).src = url;\n\t     \n\t}\n})();\n</script>","target":"","target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17994,"name":"Quantcast user match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n           var qcast_url = '//pixel.quantserve.com/pixel/p-j_f_9hh7_PWUw.gif?idmatch=0';\n           var i = new Image();\n           i.src = qcast_url;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":19372,"name":"DataLogix (afae52b8-1e27-4650-bd6a-ed7d982f5a6a)","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n \n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n         \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=afae52b8-1e27-4650-bd6a-ed7d982f5a6a&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iqbg41iqbgj68&ru=' + kurl;\n            new Image().src = dlx_url;\n          \n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":19453,"name":"BrightRoll User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//geo-um.btrll.com/v1/map_pixel/partner/48.png';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17977,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17978,"name":"Krux Geographic Data provider tag","content":"None","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17981,"name":"Data Transfer Code","content":"<script>\n(function(){\n\t// keywords\n\tKrux('scrape', { \"page_attr_keywords\" : {meta_name: 'keywords'} }) ; \n\t// url_path\n\tKrux('scrape', { \"page_attr_url_path_1\" : {url_path: 1} }) ;\n\tKrux('scrape', { \"page_attr_url_path_2\" : {url_path: 2} }) ;\n\tKrux('scrape', { \"page_attr_url_path_3\" : {url_path: 3} }) ;\n\tKrux('scrape', { \"page_attr_domain\": {url_domain: 2} });\n\tKrux('scrape', { \"page_attr_category\" : {meta_name: 'category'} }) ;\n\tKrux('scrape', { \"page_attr_subcategory\" : {meta_name: 'subcategory'} }) ;\n\tKrux('scrape', { \"page_attr_subsubcat\" : {meta_name: 'subsubcat'} });\n\tKrux('scrape', { \"page_attr_exp_name\" : {meta_name: 'exp_name'} }) ; \n\tKrux('scrape', { \"page_attr_pagetype\" : {meta_name: 'pagetype'} }) ; \n\tKrux('scrape', { \"page_attr_subpagetype\" : {meta_name: 'subpagetype'} }) ;\n\tKrux('scrape', { 'page_attr_ga_category': {meta_name: 'ga:category'}});\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":17982,"name":"AdAdvisor S2S provider tag","content":"<script>\r\n(function() {\r\n  // adadvisor redirects to http://logger... so it's not https safe\r\n  if (location.protocol == \"http:\") {\r\n     var u = \"https://aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e\";\r\n     (new Image()).src = u;\r\n   }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":24638,"name":"Signal User Match","content":"<script>\n(function(){\n\n  var kuid = Krux('get', 'user');\n  var prefix = location.protocol == 'https:' ? 'https:' : 'http:';\n\n  if (kuid) {\n    new Image().src = prefix + '//s.thebrighttag.com/cs?tp=8RtgoqC&uid=' + kuid;\n  }\n  \n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18752,"name":"DataLogix (8da8b14d-5569-4bec-bcea-722864ee8d06)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8da8b14d-5569-4bec-bcea-722864ee8d06&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18753,"name":"DataLogix (bef9f122-393d-4c45-8d8d-32d8be7ac433)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bef9f122-393d-4c45-8d8d-32d8be7ac433&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iyzu39iyzud95&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18754,"name":"DataLogix (8bf57916-aac8-4f01-a386-4baf103b3e1f)","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n \n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n         \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8bf57916-aac8-4f01-a386-4baf103b3e1f&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=bckw15bckwu20&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18755,"name":"DataLogix (d7158cb7-a851-4e3c-b7ab-cc9e815b2399)","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n\n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n\n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":19779,"name":"Jivox User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n        \tnew Image().src = \"//pxl.jivox.com/tags/sync/usync.php?px=eZQcCLxB\";\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18756,"name":"DataLogix (536f0daa-aaaa-4d9e-9a25-dde40646786a)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=536f0daa-aaaa-4d9e-9a25-dde40646786a&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18757,"name":"DataLogix (7c6392c9-e878-492c-8b14-bf06e3828ebd)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=7c6392c9-e878-492c-8b14-bf06e3828ebd&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rowp70rowpu60&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17990,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":18758,"name":"DataLogix (bb8ae0e2-9cd7-45b2-ad37-7737269627d8)","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n\n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n        \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bb8ae0e2-9cd7-45b2-ad37-7737269627d8&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rsxs71rsxsk73&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17997,"name":"Datalogix Custom User Sync","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17998,"name":"AppNexus Custom Connect","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\n            var i = new Image();\n            i.src = appnexus_url;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18000,"name":"Flashtalking Usermatch Pixel","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = '//servedby.flashtalking.com/map/?key=ad919e4f211cr5452615&url='\n                     + prefix\n                     + '//beacon.krxd.net/usermatch.gif?partner=flashtalking&partner_uid=[%FT_GUID%]';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18002,"name":"TradeDesk Custom Connect","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18003,"name":"Neustar Custom Connect","content":"<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":18004,"name":"Videology Custom Connect","content":"<script type=\"text/javascript\">\n(function() {\n    (new Image()).src = '//sync.tidaltv.com/genericusersync.ashx?dpid=395';\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":20308,"name":"Demand comScore UM Pixel","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var cbust = Math.round(new Date().getTime() / 1000);\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: url,\n      data: {\n          c1: '9',\n          c2: '8188709',\n          cs_xi: kuid,\n          rn: cbust\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18005,"name":"Webbula provider tag","content":"None","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21100,"name":"RocketFuel DemandMedia UM Pixel","content":"<script>\n(function() {\n    var i = new Image();\n    i.src = '//p.rfihub.com/cm?in=1&pub=6919';\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20355,"name":"DemandMedia Eyeota UM Pixel","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":false,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22403,"name":"Innovid User Matching","content":"<script>\n(function(){\n         var prefix = window.location.protocol == 'https:' ? \"https:\" : \"http:\";\n         var i_url = prefix + '//ag.innovid.com/dv/sync?tid=2';\n         var i = new Image();\n         i.src = i_url;\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":17995,"name":"Test Yahoo! DataX","content":"<script>\n(function(){\n    var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = 'https:';\n            var rurl = prefix + '//cms.analytics.yahoo.com/cms?partner_id=KRUX';\n            var i = new Image();\n            i.src = rurl;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":17983,"name":"Acxiom S2S provider tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;      \r\n  }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",10]]]]},{"id":17984,"name":"DataLogix provider tag","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":"","target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",10]]]]},{"id":17988,"name":"eXelate Media provider tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":"","target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",10]]]]},{"id":17993,"name":"Experian Standard provider tag","content":"","target":"","target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",10]]]]},{"id":24561,"name":"KBM user match","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n  if (kuid) {\n      var partner_url = prefix +'//global.ib-ibi.com/image.sbix?go=247532&pid=314&xid=' + kuid;\n      new Image().src = partner_url;\n  }\n})();\n</script>","target":"","target_action":"append","timing":"onready","method":"iframe","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
   */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.c9ec434df4b6649f3a798e8d03d40769', function() {
    log('Loaded steady controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());