import mixpanel, { Dict, Query } from "mixpanel-browser";

const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (!ORIGIN || !TOKEN) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_ORIGIN and NEXT_PUBLIC_MIXPANEL_TOKEN are required"
  );
}

mixpanel.init(TOKEN, {
  api_host: `${ORIGIN}/mp`,
  debug: true,
  track_pageview: true,
  ignore_dnt: true,
  loaded: () => {
    console.log("Mixpanel loaded");
  },
});

const identify = (id: string) => {
  mixpanel.identify(id);
};
const alias = (id: string) => {
  mixpanel.alias(id);
};
const track = (name: string, props?: Dict) => {
  mixpanel.track(name, props);
};
const track_links = (query: Query, name: string) => {
  mixpanel.track_links(query, name, {
    referrer: document.referrer,
  });
};

const people = {
  set: (props: Dict) => {
    mixpanel.people.set(props);
  },
  set_once: (props: Dict) => {
    mixpanel.people.set_once(props);
  },
  increment: (props: Dict) => {
    mixpanel.people.increment(props);
  },
  append: (props: Dict) => {
    mixpanel.people.append(props);
  },
  union: (props: Dict) => {
    mixpanel.people.union(props);
  },
  track_charge: (amount: number) => {
    mixpanel.people.track_charge(amount);
  },
};

export default { identify, alias, track, track_links, people };
