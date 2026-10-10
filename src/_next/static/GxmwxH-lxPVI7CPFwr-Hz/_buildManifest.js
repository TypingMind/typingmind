self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/0pmpw6j_xjl05.js"
  ],
  "/_error": [
    "static/chunks/321q485ktdeff.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/:path*.map",
        "destination": "/404"
      },
      {
        "source": "/llms.txt"
      },
      {
        "source": "/kb",
        "destination": "/notused/kb"
      },
      {
        "source": "/kb/:path*",
        "destination": "/notused/kb/:path*"
      },
      {
        "source": "/kb-static/:path*",
        "destination": "/notused/kb-static/:path*"
      },
      {
        "source": "/kb-api/:path*",
        "destination": "/notused/:path*"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()