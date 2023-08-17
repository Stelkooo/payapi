import { groq } from 'next-sanity';

const navItemsQuery = groq`
  navItems[] {
    _key,
    title,
    _type == "navPage" => {
      page-> {
        slug,
      },
    },
  }
`;

const headerQuery = groq`
  "header": *[_type == "headerSettings"][0] {
    ${navItemsQuery},
  }
`;

const footerQuery = groq`
  "footer": *[_type == "footerSettings"][0] {
    ${navItemsQuery},
    socialLinks[] {
      icon,
      _key,
      url,
    },
  }
`;

const defaultSeoQuery = groq`
  "defaultSeo": *[_type == "seoSettings"][0] {
    metaTitle,
    metaDesc,
    shareGraphic,
  }
`;

const generalSettingsQuery = groq`
  "general": *[_type == "generalSettings"][0] {
    title,
  }
`;

const siteQuery = groq`
  "site": {
    ${headerQuery},
    ${footerQuery},
    ${defaultSeoQuery},
    ${generalSettingsQuery},
  }
`;

const imageQuery = groq`
  asset-> {
    ...,
    metadata,
  }
`;

const modulesQuery = groq`
  modules[] {
    ...,
    _type == "heroModule" => {
      ...,
      image {
        ${imageQuery},
      },
    },
    _type == "logosModule" => {
      ...,
      companies[]-> {
        name,
        logo {
          ${imageQuery},
        },
        _id,
      },
    }
  }
`;

const homeQuery = groq`
  "home": *[_type == "home"][0] {
    ${modulesQuery},
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const homePageQuery = groq`
  {
    ${homeQuery},
    ${siteQuery},
  }
`;
