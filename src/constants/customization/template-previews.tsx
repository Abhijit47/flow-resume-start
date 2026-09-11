// all(done), popular(done), simple(done), modern(done), creative(done)
const templateFeatures = [
  'A4 / US-Letter Size',
  'Editable Text',
  'Fully customizable',
  'Print ready format',
  'Online resume with shareable link',
]

/*
for change the template, patch requ types
{"customization":{"layout":{"detailsPosition":"left","colsFromDetails":{"top":"one","left":"two","right":"two"},"colWidthsFromDetails":{"top":{"leftWidth":50,"rightWidth":50},"left":{"leftWidth":44,"rightWidth":56},"right":{"leftWidth":50,"rightWidth":50}}},"entryLayout":{"subtitleStyle":"normal","dateStyle":"normal","locationStyle":"normal","bodyIndentation":"0","displayMode":"dateLocationLeft","dateLocationOrder":"dateLocation","fullWidthDateLocationPlacement":"right","twoColumnFullWidthDateLocationPlacement":"below","fullWidthDateLocationRightSubtitlePlacement":"nextLine","fullWidthDateLocationRightLocationPlacement":"trySameLine","fullWidthDateLocationBelowSubtitlePlacement":"nextLine","fullWidthDateLocationBelowLocationPlacement":"trySameLine","fullWidthDateLocationRightEntryHeaderMode":"manual","colMode":"auto","colWidths":{"dateLocationLeft":{"left":0,"right":0},"dateLocationRight":{"left":0,"right":0},"dateContentLocation":{"left":0,"middle":0,"right":0}},"dateLocationOpacity":false,"fullWidthDateLocationRightHeaderWidths":{"dateLocation":45,"titleAndSubtitle":55}},"sectionOrder":{"one":{"sectionsSorted":["profile","work","education","skill","award","language","course","project","interest","reference","certificate","declaration","publication","organisation","cfd3b9c2-3472-4a14-9e16-1c5b1eecd2c7"]},"two":{"leftSectionsSorted":["profile","language","award"],"rightSectionsSorted":["work","education","skill","course","project","interest","reference","certificate","declaration","publication","organisation","cfd3b9c2-3472-4a14-9e16-1c5b1eecd2c7"]},"mix":[{"left":["profile"],"right":[]},"work","education","skill","award","language","course","project","interest","reference","certificate","declaration","publication","organisation","cfd3b9c2-3472-4a14-9e16-1c5b1eecd2c7"]},"header":{"alignText":"start","photoPositionHeaderOnTop":"right","photoPositionHeaderInColumn":"below","photo":{"show":true,"grayscale":false,"size":"m"},"detailsDisplayCenter":"icon","detailsDisplayLeftRight":"icon","accentuateName":true,"detailsGrid":false,"detailsArrangement":"wrap","jobTitleStyle":"normal","jobTitlePosition":"below","iconFrame":"none","iconFrameStyle":"filled","photoPositionFromHeaderPosition":{"top":"center","left":"right","right":"center"}},"spacing":{"marginVertical":"3","marginHorizontal":"4","fontSize":"2","titleAndSubtitleFontSizePt":10,"sectionHeadingFontSizePt":12,"nameFontSizePt":24,"jobTitleFontSizePt":16.5,"lineHeight":"4","spacingFactor":"8"},"font":{"selected":"serif","fontFamily":"Zilla Slab"},"japaneseFont":"Noto Sans JP","arabicFont":"IBM Plex Sans Arabic","hebrewFont":"Assistant","skillDisplay":{"selected":"grid","grid":{"columns":"three"},"level":{"selected":"dots"},"text":"bullet","subinfoSeparator":"dash","addRowSpacing":false},"languageDisplay":{"selected":"level","grid":{"columns":"three"},"level":{"selected":"dots"},"text":"bullet","subinfoSeparator":"dash","addRowSpacing":true},"interestDisplay":{"selected":"grid","grid":{"columns":"three"},"text":"bullet","subinfoSeparator":"dash","addRowSpacing":true},"certificateDisplay":{"selected":"grid","grid":{"columns":"three"},"text":"bullet","subinfoSeparator":"dash","addRowSpacing":true},"heading":{"style":"box","capitalization":"uppercase","icons":"filled"},"expert":{"footer":{"pages":false,"name":false,"email":false,"custom":{"enabled":false,"col1":"","col2":"","col3":""}},"subTitlePlacement":"nextLine","showProfileHeading":true,"mergeProfileWithHeader":false},"advanced":{"listStyle":"bullet","linkIcon":"diagonalChain","underlineLinks":false,"makeLinksBlue":false,"applyLinkStylingToHeaderLinks":{"phone":false,"displayEmail":false},"groupPromotions":false},"creativeNameFont":"bodyFont","applyAccentColor":{"name":false,"jobTitle":false,"headings":false,"headingLine":true,"dotsBarsBubbles":true,"icons":false,"dates":false,"entrySubtitle":false,"linkIcons":false},"colors":{"mode":"advanced","basic":{"selected":"single","single":"#0e374e","singleCustom":"#0e374e","multi":{"backgroundColor":"#ffffff","accentColor":"#0e374e","textColor":"#000000"},"multiCustom":{"backgroundColor":"#ffffff","accentColor":"#0e374e","textColor":"#000000"}},"advanced":{"selected":"multi","single":"#0e374e","singleCustom":"#0e374e","multi":{"strong":{"backgroundColor":"#193141","accentColor":"#d2bfb7 ","textColor":"#ffffff"},"light":{"backgroundColor":"#ffffff","accentColor":"#193141","textColor":"#222222"}},"multiCustom":{"strong":{"backgroundColor":"#fff","accentColor":"#000","textColor":"#000"},"light":{"backgroundColor":"#fff","accentColor":"#000","textColor":"#000"}}},"border":{"selected":"single","single":"#0e374e","singleCustom":"#0e374e","width":"m","left":true,"top":true,"right":true,"bottom":true}},"unsplashImageHistory":[{"width":2565,"height":4560,"photoId":"xljtGZ2-P3Y","urlFull":"https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMTg4M30","urlThumb":"https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMTg4M30","brightness":53,"urlRegular":"https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMTg4M30","userHtmlLink":"https://unsplash.com/@nahilnaseer","dominantColors":["#1f2c2c","#5d9479","#3f6e5a","#86aa96","#587c6c","#2d5145","#3d574f","#304344","#485b5c","#748484"],"photographerId":"dD4xvxNBI2Y","photographerFullName":"Nahil Naseer","photographerLastName":"Naseer","photographerFirstName":"Nahil"}],"educationDisplay":{"degreeBeforeSchool":true},"workDisplay":{"jobTitleBeforeEmployer":false},"customSkillSections":{},"declarationDisplay":{"showHeading":true,"position":"right","line":"solid"},"pageFormat":"A4","fullDateFormat":"Do MMMM YYYY","monthYearFormat":"MMMM YYYY","lastUsedTemplateId":"a3fb6c37-c06c-40bb-a0ab-98d389f06c86","hasManuallyResortedSectionOrder":true,"regional":{"format":"A4","anonymous":false,"dateDisplay":"DD/MM/YYYY","monthFormat":"MM","dateDelimiter":"/"},"templateSectionOrder":{"mix":[{"left":["profile"],"right":[]},"work","education","skill","award","rPBBB5CnDUsg5-BeZwmbr","language","jkpRoBst5fBixj8pElQGt"],"one":{"sectionsSorted":["profile","work","education","skill","award","rPBBB5CnDUsg5-BeZwmbr","language","jkpRoBst5fBixj8pElQGt"]},"two":{"leftSectionsSorted":["profile","language","award"],"rightSectionsSorted":["work","education","skill","rPBBB5CnDUsg5-BeZwmbr","jkpRoBst5fBixj8pElQGt"]}}},"resumeId":"dbc793d3-3bba-4a2d-b427-934e69985d69","templateId":"a3fb6c37-c06c-40bb-a0ab-98d389f06c86"}
*/

export const templateStatic = [
  {
    id: crypto.randomUUID(),
    name: 'Classic Clear',
    preview:
      'https://prod.flowcvassets.com/resume-templates/fghudm5i-zjqhrl7xojet/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Atlantic Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/z_b_8pggvd0955_woiozq/2560.webp',
    tags: ['all', 'popular', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mercury Flow',
    preview:
      'https://prod.flowcvassets.com/resume-templates/rmru01trapnyfcriromx3/2560.webp',
    tags: ['all', 'popular', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Editorial Rule',
    preview:
      'https://prod.flowcvassets.com/resume-templates/nbh26inf-3is9ndgas84b/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'True Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/r4mbkitec4nkpg5rwgile/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Saffron Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/a1-e6ftgh1yw4jk_yv_ok/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Hunter Green',
    preview:
      'https://prod.flowcvassets.com/resume-templates/3qr-u-_73vallyazchi1/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Steady Form',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ot-x4w14bqrnl0_gdy7wz/2560.webp',
    tags: ['all', 'popular', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Precision Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/gpyspoj36jrop6w1ukmn9/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Quicksilver',
    preview:
      'https://prod.flowcvassets.com/resume-templates/rayst7i0ode4tknkeuto1/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Silver Banner',
    preview:
      'https://prod.flowcvassets.com/resume-templates/owx6szticv7k8wnneiu73/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Serif',
    preview:
      'https://prod.flowcvassets.com/resume-templates/jcex2vxbcziufxfpachm/2560.webp',
    tags: ['all', 'popular', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Refined',
    preview:
      'https://prod.flowcvassets.com/resume-templates/xppsu6cbneo0mru6sups/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Cobalt Edge',
    preview:
      'https://prod.flowcvassets.com/resume-templates/tlebiuzyf3usyo80qapap/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Condensed Rule',
    preview:
      'https://prod.flowcvassets.com/resume-templates/tk2tatpcnmoiift3ompme/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Obsidian Edge',
    preview:
      'https://prod.flowcvassets.com/resume-templates/k3aemigdsvyerc1d8vzcz/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Corporate',
    preview:
      'https://prod.flowcvassets.com/resume-templates/b57oxdungncwiq4kzv2_f/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Atlantic Horizon',
    preview:
      'https://prod.flowcvassets.com/resume-templates/1seq110j566t2hb-9nit/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Portrait',
    preview:
      'https://prod.flowcvassets.com/resume-templates/6yr2qwo0y592a6tfifbkt/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Neon Green',
    preview:
      'https://prod.flowcvassets.com/resume-templates/6dffrs7x7l7cpzwdj2irs/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sage Green',
    preview:
      'https://prod.flowcvassets.com/resume-templates/wtlzsihj8hcstmoci6upa/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Pure',
    preview:
      'https://prod.flowcvassets.com/resume-templates/4zaw3bfdjjr9et4aw0smv/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Atlantic Standard',
    preview:
      'https://prod.flowcvassets.com/resume-templates/0chcwkptuwwvvso2ervjv/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Leaves',
    preview:
      'https://prod.flowcvassets.com/resume-templates/q5esjk7z-oy0vs4wjjlh4/2560.webp',
    tags: ['all', 'popular', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Executive',
    preview:
      'https://prod.flowcvassets.com/resume-templates/gs_qryrzly3kldmqhxqsb/2560.webp',
    tags: ['all', 'popular', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mono Underline',
    preview:
      'https://prod.flowcvassets.com/resume-templates/_ayjfh9l3v29mg6aaf8se/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Split Rule',
    preview:
      'https://prod.flowcvassets.com/resume-templates/n33zeavr41mhopvyff11a/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Atlantic Crest',
    preview:
      'https://prod.flowcvassets.com/resume-templates/l66whav9zqptzrxjuvlmc/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Designer',
    preview:
      'https://prod.flowcvassets.com/resume-templates/g10qfvpea7ji4z6otpomp/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Neutral Gray',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hbtocuxf9ibj48uebso5r/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Confident Grid',
    preview:
      'https://prod.flowcvassets.com/resume-templates/qgg1m0keuxd7gx4w36gpt/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Slate',
    preview:
      'https://prod.flowcvassets.com/resume-templates/cwiudmeeldxh77lwjkfvj/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Even Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/qd3oaj7iam82jbfz4lpvi/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Happy',
    preview:
      'https://prod.flowcvassets.com/resume-templates/v6g7rscizwqa8qitxcadv/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Coral Navy',
    preview:
      'https://prod.flowcvassets.com/resume-templates/y6twjqgcmplcnnoqzfkn0/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Compact Serif',
    preview:
      'https://prod.flowcvassets.com/resume-templates/cqzvlkguz3ffddga3ygpr/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sandstone Dual',
    preview:
      'https://prod.flowcvassets.com/resume-templates/e1wjwyq068l0xqbfkx6ri/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Sans',
    preview:
      'https://prod.flowcvassets.com/resume-templates/v-bf7jmbqhmjyrergnxzk/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Pure Baseline',
    preview:
      'https://prod.flowcvassets.com/resume-templates/3qrnffppetzrizdaw41m0/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Olive Ash',
    preview:
      'https://prod.flowcvassets.com/resume-templates/h9hmb7ft-5ots-ztg39d/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Simply Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/myc34dbmtb4ztayb2kedl/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Blue Steel',
    preview:
      'https://prod.flowcvassets.com/resume-templates/fek0ssbi32k1bmk59qabe/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Minty',
    preview:
      'https://prod.flowcvassets.com/resume-templates/spq0sd8muwn3ijeckqtbm/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mercury Panel',
    preview:
      'https://prod.flowcvassets.com/resume-templates/tdduvqpugtc5lttskorwi/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Flower',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hllwmnql8b3hndx1ulhrx/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Charcoal Glow',
    preview:
      'https://prod.flowcvassets.com/resume-templates/w_icycza8fn0gxovxcvuc/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Clean Slate',
    preview:
      'https://prod.flowcvassets.com/resume-templates/745nhxssugr2yxuyrj_df/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Desert Rock',
    preview:
      'https://prod.flowcvassets.com/resume-templates/e8pud1on5urq08-eus5xa/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Royal Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/fz9_k1l5lqqfo3vh1srrm/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Fine Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hhgiq971t9bmcmgk7yvzs/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Slate Focus',
    preview:
      'https://prod.flowcvassets.com/resume-templates/usc7mlne_koztc0_ewzkg/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Clear Banner',
    preview:
      'https://prod.flowcvassets.com/resume-templates/6hgwmzmpsiw9rqjflgp0q/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Black Pattern',
    preview:
      'https://prod.flowcvassets.com/resume-templates/th-_fq-yjykomqznpladu/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Open Form',
    preview:
      'https://prod.flowcvassets.com/resume-templates/mqcwn16ycfws4ea8bzqxl/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Space',
    preview:
      'https://prod.flowcvassets.com/resume-templates/10j8m87ohtyk26o66ps3e/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Cyan Grey',
    preview:
      'https://prod.flowcvassets.com/resume-templates/uvcv8uet5y6mxxfgqgcft/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Slate Dawn',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ixjzdicunsw89k_tyowwc/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Blue Classic',
    preview:
      'https://prod.flowcvassets.com/resume-templates/wocpvkrglpwnlc9mw5kuq/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Blue Neon',
    preview:
      'https://prod.flowcvassets.com/resume-templates/2favldkhk6fj2ldtr6gu/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Corporate Panel',
    preview:
      'https://prod.flowcvassets.com/resume-templates/7azg6zbed6nygb9x2-buh/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sage Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/vg3x5boxoflzbog5ha9z/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Quiet Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/to0lueeuhhe6pvnmchkzy/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Grey Goose',
    preview:
      'https://prod.flowcvassets.com/resume-templates/mwo5rdzygyzgpjhr1vdnr/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Evergreen Slate',
    preview:
      'https://prod.flowcvassets.com/resume-templates/1b54t6ful3qlp6sft7px/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Classic Ledger',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hgodyoaongor8dly3dbpc/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Ultra Violet',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ttvbfaxuvvnu4uncna0mb/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sage Horizon',
    preview:
      'https://prod.flowcvassets.com/resume-templates/chhvm5z7navjz4t2j2em_/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Emerald Mist',
    preview:
      'https://prod.flowcvassets.com/resume-templates/vtieqz0votjoxjqbpeig8/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Azure Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hpt5v8shymzfrxfhroy88/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Burgundy',
    preview:
      'https://prod.flowcvassets.com/resume-templates/n9mmojn86lnm80lbjib2i/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Simple Blush',
    preview:
      'https://prod.flowcvassets.com/resume-templates/fjbylllelhubbnlvgcakc/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Blue Accent',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ivkaz2jsq4_z9fe5q23wu/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Quiet Focus',
    preview:
      'https://prod.flowcvassets.com/resume-templates/dvgy5j4kgffifvcs_i7kc/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Calm Blue',
    preview:
      'https://prod.flowcvassets.com/resume-templates/x0n0bfzpgrfew7r6ntgvs/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Green Accent',
    preview:
      'https://prod.flowcvassets.com/resume-templates/l0etimrjkohfvt2lngegu/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Compact Sans',
    preview:
      'https://prod.flowcvassets.com/resume-templates/9eydxp5becrdmuohw08c5/2560.webp',
    tags: ['all', 'simple'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Viola',
    preview:
      'https://prod.flowcvassets.com/resume-templates/sjbaacq_1drs8kjhoxji4/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Mint Line',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ti8sad-qkgcceacnm0j9r/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Powder Blush',
    preview:
      'https://prod.flowcvassets.com/resume-templates/e8lbbbqvr_pi1ezn6pu2s/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Steel Grey',
    preview:
      'https://prod.flowcvassets.com/resume-templates/cw03jtgrum_mbx5nn1k8y/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Warrior Red',
    preview:
      'https://prod.flowcvassets.com/resume-templates/dvtyxt3plymwuigbgma5x/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Plum Accent',
    preview:
      'https://prod.flowcvassets.com/resume-templates/gvlbabpyt6-afydt6vyl/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Web Worker',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ibxbdsdygu7yieqeumyvy/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sea Pearl',
    preview:
      'https://prod.flowcvassets.com/resume-templates/zjdrvloz4zmbgqr0n8mja/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Pastel',
    preview:
      'https://prod.flowcvassets.com/resume-templates/uvymthr_-bjjpj0f6fsfv/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Deep Forest',
    preview:
      'https://prod.flowcvassets.com/resume-templates/qh_kpltbeapqidbrq-p2d/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Aqua Splash',
    preview:
      'https://prod.flowcvassets.com/resume-templates/3hkthjkwk0atkqsct4tq5/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Golden Mosaic',
    preview:
      'https://prod.flowcvassets.com/resume-templates/z9kebfbtbqurfqf7ecri/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Swimming Pool',
    preview:
      'https://prod.flowcvassets.com/resume-templates/zwefrqz7ibyjei2ttxfiq/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Accentuated Red',
    preview:
      'https://prod.flowcvassets.com/resume-templates/8_70d0dqsa-tdxfdwrc9p/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Green Frame',
    preview:
      'https://prod.flowcvassets.com/resume-templates/zvoqzj6al9rtc7exsduyf/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Amethyst Edge',
    preview:
      'https://prod.flowcvassets.com/resume-templates/_2ellyme8izvz3zkwtjmg/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Lavender',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ddcueit20k_zhzg1xgi9q/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Rosewood',
    preview:
      'https://prod.flowcvassets.com/resume-templates/fcknor8rz4hvuvorom9ml/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Gold',
    preview:
      'https://prod.flowcvassets.com/resume-templates/hzvvtfs-fjct-xo378ip/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Transparent Leaves',
    preview:
      'https://prod.flowcvassets.com/resume-templates/xujxo5od8gq36ba39f7gh/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dark Leaves',
    preview:
      'https://prod.flowcvassets.com/resume-templates/vjlujtu0mzcm2imok5s1n/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Opal Silk',
    preview:
      'https://prod.flowcvassets.com/resume-templates/azoq4gmflcc6stgglrzpb/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Almost Black',
    preview:
      'https://prod.flowcvassets.com/resume-templates/cqwu0mfi_kdlgqg3ij9gt/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Red Accent',
    preview:
      'https://prod.flowcvassets.com/resume-templates/ee2lno46809whuyrlgocq/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Frosted Teal',
    preview:
      'https://prod.flowcvassets.com/resume-templates/tzky2s_qwuv5mbbm0mfaa/2560.webp',
    tags: ['all', 'modern'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Violetta',
    preview:
      'https://prod.flowcvassets.com/resume-templates/_5erysjjycavkqbu8mlul/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Typewriter',
    preview:
      'https://prod.flowcvassets.com/resume-templates/j1re-vyec0vadiafe-oez/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sunset Gradient',
    preview:
      'https://prod.flowcvassets.com/resume-templates/l2w45juhl8i4hjpn3xqvk/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
  {
    id: crypto.randomUUID(),
    name: 'Grenadine Red',
    preview:
      'https://prod.flowcvassets.com/resume-templates/bp-s_rae24mq1_4bq_pqm/2560.webp',
    tags: ['all', 'creative'],
    description:
      'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
    features: templateFeatures,
  },
]
