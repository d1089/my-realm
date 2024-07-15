import type { Asset } from "$lib/types";
import { base } from "$app/paths";
import { theme } from "$lib/stores/theme";

const a = (light: string, dark?: string): Asset =>
  dark
    ? {
        dark: `${base}/logos/${dark}`,
        light: `${base}/logos/${light}`,
      }
    : `${base}/logos/${light}`;

const Assets = {
  AWS: a("aws.svg"),
  Azure: a("azure.png"),
  C: a("c.svg"),
  Cpp: a("cpp.svg"),
  Django: a("django.svg"),
  FastApi: a("fastAPI.png"),
  Flask: a("flask.svg"),
  Go: a("go.svg"),
  Kafka: a("kafka.png"),
  Nginx: a("nginx.svg"),
  Docker: a("docker.svg"),
  Kubernetes: a("kubernetees.svg"),
  TypeScript: a("ts.png"),
  ReactJs: a("react.svg"),
  Python: a("python.png"),
  NodeJs: a("node.png"),
  Svelte: a("svelte.png"),
  JavaScript: a("js.png"),
  Java: a("java.png"),
  PostgreSQL: a("postgres.png"),
  Selenium: a("selenium.png"),
  Sass: a("sass.png"),
  Redis: a("redis.svg"),
  Tailwind: a("tailwind.svg"),
  HTML: a("html.svg"),
  Vite: a("vite.png"),
  Jest: a("jest.png"),
  College: a("college.png"),
  Byjus: a("byjus.png"),
  Toppr: a("toppr.png"),
  Compcart: a("compcart.png"),
  Wipro: a("wipro.png"),
  ITC: a("itc.png"),
  SalamTelecom: a("salam.png"),
  TMobile: a("tmobile.png"),
  Unknown: a("unknown.png"),
  Jio: a("jio.png"),
  SpringBoot: a("springboot.png"),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => {
  currentTheme = v;
});

export const getAssetUrl = (asset: Asset): string => {
  return typeof asset === "string"
    ? asset
    : currentTheme
    ? asset.dark
    : asset.light;
};
