import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_intros';
  info: {
    displayName: 'aboutIntro';
  };
  attributes: {
    button: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedApplicationSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_application_steps';
  info: {
    displayName: 'applicationSteps';
  };
  attributes: {
    content: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_items';
  info: {
    displayName: 'Contact Items';
  };
  attributes: {
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['phone', 'email', 'location']>;
  };
}

export interface SharedDiscourse extends Struct.ComponentSchema {
  collectionName: 'components_shared_discourses';
  info: {
    displayName: 'discourse';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDocumentList extends Struct.ComponentSchema {
  collectionName: 'components_shared_document_lists';
  info: {
    displayName: 'documentList';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface SharedFacilitiesItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_facilities_items';
  info: {
    displayName: 'facilitiesItems';
  };
  attributes: {
    desscription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_shared_mission_visions';
  info: {
    displayName: 'mission-vision';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedProgramItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_items';
  info: {
    displayName: 'programItem';
  };
  attributes: {
    ageRange: Schema.Attribute.String;
    childrenNo: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    enrollmentOptions: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    lists: Schema.Attribute.Component<'shared.program-items-list', true>;
    program: Schema.Attribute.String;
    teachersNo: Schema.Attribute.String;
  };
}

export interface SharedProgramItemsList extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_items_lists';
  info: {
    displayName: 'programItemsList';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface SharedQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_links';
  info: {
    displayName: 'Quick Link';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialMediaItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_items';
  info: {
    displayName: 'socialMediaItems';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-intro': SharedAboutIntro;
      'shared.application-steps': SharedApplicationSteps;
      'shared.contact-items': SharedContactItems;
      'shared.discourse': SharedDiscourse;
      'shared.document-list': SharedDocumentList;
      'shared.facilities-items': SharedFacilitiesItems;
      'shared.media': SharedMedia;
      'shared.mission-vision': SharedMissionVision;
      'shared.program-item': SharedProgramItem;
      'shared.program-items-list': SharedProgramItemsList;
      'shared.quick-link': SharedQuickLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-media-items': SharedSocialMediaItems;
    }
  }
}
