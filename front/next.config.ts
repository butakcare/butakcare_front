import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.daumcdn.net;",
              "script-src-elem 'self' 'unsafe-inline' *.daumcdn.net;",
              "frame-src 'self' *.daumcdn.net https://* http://*;",
              "frame-ancestors 'self' *.daumcdn.net https://* http://*;",
              "style-src 'self' 'unsafe-inline' *.daumcdn.net;",
              "img-src 'self' data: *.daumcdn.net;",
              "default-src 'self'; connect-src 'self' http://43.201.162.49; img-src 'self' *.daumcdn.net; script-src 'self'; style-src 'self';",
              "connect-src 'self' *.daumcdn.net;",
              "font-src 'self' *.daumcdn.net;",
              "object-src 'none';",
            ].join(" "),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
