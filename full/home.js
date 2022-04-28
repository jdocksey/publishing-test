// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var ActionTag;
(function(ActionTag1) {
    ActionTag1["BrowserNavigateToPoem"] = 'browser-navigate-to-poem';
    ActionTag1["BrowserNavigationEvent"] = 'browser-navigation-event';
    ActionTag1["UserAboutOpen"] = 'user-about-open';
    ActionTag1["UserAboutClose"] = 'user-about-close';
    ActionTag1["UserPoemLinkClick"] = 'user-poem-link-click';
    ActionTag1["UserPoemViewerClose"] = 'user-poem-viewer-close';
    ActionTag1["UserScroll"] = 'user-scroll';
    ActionTag1["WindowResize"] = 'window-resize';
})(ActionTag || (ActionTag = {}));
function createAction(type, payload) {
    if (type === ActionTag.BrowserNavigationEvent || type === ActionTag.BrowserNavigateToPoem || type === ActionTag.UserPoemLinkClick || type === ActionTag.UserScroll || type === ActionTag.WindowResize) {
        if (payload) {
            return {
                type,
                payload
            };
        } else {
            console.warn(`invalid action creation (no action created) - type: ${type} payload: ${JSON.stringify(payload)}`);
            return null;
        }
    } else {
        return {
            type
        };
    }
}
function addToSessionHistory(page, poemID) {
    const data = {
        page
    };
    if (poemID) {
        history.pushState(data, '', `?poem=${poemID}`);
    } else {
        window.history.pushState(data, '', window.location.pathname);
    }
}
function getUrl() {
    return window.location.toString();
}
function getQueryParamValue(paramName, url) {
    const queryString = getQueryParamString(url ?? null);
    const params = new URLSearchParams(queryString);
    return params.get(paramName);
}
function getQueryParamString(url) {
    if (url) {
        const index = url.indexOf('?');
        if (index >= 0) {
            return url.substring(index);
        } else {
            return '';
        }
    } else {
        return window.location.search;
    }
}
const config = {
    sourceRoot: '.',
    sources: {
        indexHtml: './index.html',
        basic: './basic',
        full: './full'
    },
    destination: '../website-output',
    poetry: {
        sources: {
            object: '../poems/poems.ts',
            plainText: '../poems/plain-text'
        },
        buildDirectory: 'poems',
        poems: [
            {
                title: 'Autumn',
                id: 'autumn',
                filename: 'autumn.txt'
            },
            {
                title: 'Bright Grace',
                id: 'bright-grace',
                filename: 'bright-grace.txt'
            },
            {
                title: 'Child, Son',
                id: 'child-son',
                filename: 'child-son.txt'
            },
            {
                title: 'Cocoa Sweat',
                id: 'cocoa-sweat',
                filename: 'cocoa-sweat.txt'
            },
            {
                title: 'Coyote Bones',
                id: 'coyote-bones',
                filename: 'coyote-bones.txt'
            },
            {
                title: 'Dear Sister, Friend',
                id: 'dear-sister-and-friend',
                filename: 'dear-sister-and-friend.txt'
            },
            {
                title: 'Edging Homeward',
                id: 'edging-homeward',
                filename: 'edging-homeward.txt'
            },
            {
                title: 'Ending',
                id: 'ending',
                filename: 'ending.txt'
            },
            {
                title: 'Fatigue, Raw',
                id: 'fatigue-raw',
                filename: 'fatigue-raw.txt'
            },
            {
                title: 'Gold Resurrection',
                id: 'gold-resurrection',
                filename: 'gold-resurrection.txt'
            },
            {
                title: 'Golden Embers Alive',
                id: 'golden-embers-alive',
                filename: 'golden-embers-alive.txt'
            },
            {
                title: 'Great Dove',
                id: 'great-dove',
                filename: 'great-dove.txt'
            },
            {
                title: 'I Fear No Loss',
                id: 'i-fear-no-loss',
                filename: 'i-fear-no-loss.txt'
            },
            {
                title: 'Kitchen Rags',
                id: 'kitchen-rags',
                filename: 'kitchen-rags.txt'
            },
            {
                title: 'Mary',
                id: 'mary',
                filename: 'mary.txt'
            },
            {
                title: 'Moonrise Summer',
                id: 'moonrise-summer',
                filename: 'moonrise-summer.txt'
            },
            {
                title: 'Owl And Moon',
                id: 'owl-and-moon',
                filename: 'owl-and-moon.txt'
            },
            {
                title: 'Rise (I Hope We Dance)',
                id: 'rise-i-hope-we-dance',
                filename: 'rise-i-hope-we-dance.txt'
            },
            {
                title: 'Sheltered by Snow',
                id: 'sheltered-by-snow',
                filename: 'sheltered-by-snow.txt'
            },
            {
                title: 'Silent Birds',
                id: 'silent-birds',
                filename: 'silent-birds.txt'
            },
            {
                title: 'Snowswept',
                id: 'snowswept',
                filename: 'snowswept.txt'
            },
            {
                title: 'Sometimes',
                id: 'sometimes',
                filename: 'sometimes.txt'
            },
            {
                title: 'Spindle Trees',
                id: 'spindle-trees',
                filename: 'spindle-trees.txt'
            },
            {
                title: 'Sugar Lake',
                id: 'sugar-lake',
                filename: 'sugar-lake.txt'
            },
            {
                title: 'Swans Etch Heaven',
                id: 'swans-etch-heaven',
                filename: 'swans-etch-heaven.txt'
            },
            {
                title: 'Sweat and Swallow',
                id: 'sweat-and-swallow',
                filename: 'sweat-and-swallow.txt'
            },
            {
                title: 'Swollen Tongue',
                id: 'swollen-tongue',
                filename: 'swollen-tongue.txt'
            },
            {
                title: 'Thin Air',
                id: 'thin-air',
                filename: 'thin-air.txt'
            },
            {
                title: 'Tips of Flesh',
                id: 'tips-of-flesh',
                filename: 'tips-of-flesh.txt'
            },
            {
                title: 'Toil Without Treasure',
                id: 'toil-without-treasure',
                filename: 'toil-without-treasure.txt'
            },
            {
                title: 'Tonight, Thunder',
                id: 'tonight-thunder',
                filename: 'tonight-thunder.txt'
            },
            {
                title: 'Twisted Tree',
                id: 'twisted-tree',
                filename: 'twisted-tree.txt'
            },
            {
                title: 'Unto Home',
                id: 'unto-home',
                filename: 'unto-home.txt'
            },
            {
                title: 'Wet Earth (Go Forward)',
                id: 'wet-earth-go-forward',
                filename: 'wet-earth-go-forward.txt'
            },
            {
                title: 'Woman (Home)',
                id: 'woman-home',
                filename: 'woman-home.txt'
            },
            {
                title: 'Woman (Terrific Black Wings)',
                id: 'woman-terrific-black-wings',
                filename: 'woman-terrific-black-wings.txt'
            },
            {
                title: 'Woodlands',
                id: 'woodlands',
                filename: 'woodlands.txt'
            },
            {
                title: 'Young Woman',
                id: 'young-woman',
                filename: 'young-woman.txt'
            }
        ]
    }
};
function getPoemID(id) {
    if (id) {
        const poemIDs = config.poetry.poems.map((poem)=>poem.id
        );
        return poemIDs.includes(id) ? id : null;
    } else {
        return null;
    }
}
var Page;
(function(Page1) {
    Page1["HOME"] = 'home';
    Page1["ABOUT"] = 'about';
    Page1["POEM"] = 'poem';
})(Page || (Page = {}));
function getPageFromBrowserNavigationPayload(payload) {
    return payload.data?.page ?? null;
}
function getPoemIdFromQueryParameter(url) {
    const poemIdParam = getQueryParamValue('poem', url);
    return getPoemID(poemIdParam);
}
const Poems = [
    {
        id: `autumn`,
        title: `Autumn`,
        content: `When colors fail\n    to turn in the autumn,\nWhen our habits shrink\n    and coalesce;\nWhen the last door out\n    requires loss\n    of the idols we adore:\nI promise we'll be grateful\n    if we choose good hope\n    this fall;\nfor the dimmest lamps burn strongest\n    when no other lamps\n    stand at all.`
    },
    {
        id: `bright-grace`,
        title: `Bright Grace`,
        content: `Growing older, I've awoken\n    to hot terrors all around,\nand the bright grace\nI knew when younger\n    is less easily found.\n\nI've learned:\nthe realm of my heart\n    is treacherous ground;\nit has become a battlefield\n    of aches,\n    sunken bullets,\n    and bones,\ncovered with half-light dust,\n    the decay of my soul.\n\nI've learned:\nevery idol dies,\n    and we cling\n    to their bleach-white bones.\n\n\n\nSo now,\n    woman,\nI pant with tortured lung,\nfeeling wounds I've borne long\n    and no longer want;\nI begin to rest starving eyes\nand turn my toes back to you,\n    to ask:\n\nIf I peel away my dying shirt\n    and the sweat stays\n    like stubborn waste;\nif I am speckled brown\n    with muddy earth,\n    with soil stamped in my face;\nif I come again\n    (but cold and broken-limbed,)\n    will you still remember\n        and care\n    to bear my name?\n`
    },
    {
        id: `child-son`,
        title: `Child, Son`,
        content: `Before these bones\n    fall asleep,\nwill he call on me?\n\nA nervous child,\n    spread fingers raised,\nwill I be found worthy?\n\n\nThe smoky, glassy heart\n    has been shattered,\n    which together we bore underneath\n        photographs, in memory come to life;\n    in last days\n        we trembled forward,\n    breathing in black and white.\n\nNow I wait, and wander\n    for roads I haven't seen,\nwhile cold comes steadily upward\n    from open ground\n        - I musn't fall asleep.\n\nTime, leading ever westward, leaves behind\n    what I don't seem to need:\nmy father's shadow, like his pocketwatch,\n    is now mine for keeps.\n\nSo winter breath, and hymn of earth:\n    my chest stock-full of grief;\ngood wishes, the future we shared\n    in plans, just intention-deep;\na holy hope, a righteous home,\n    a true wife: we both believed.\n`
    },
    {
        id: `cocoa-sweat`,
        title: `Cocoa Sweat`,
        content: `Poverty of man\n    turns rich soil dark,\n    and I bake in earthly labor,\n        turning cocoa with sweat -\n        pasted trial, stuck\n            compressed against skin.\nMy days peel off,\n    tender to your glance.\n\nDear, good friend,\n    woman become sister,\n        I pine for hope,\n        and rest beside you.\n\nSalt the night\n    with your kiss,\n    and draw moonglow close\n        with touch of feather-heart.\n`
    },
    {
        id: `coyote-bones`,
        title: `Coyote Bones`,
        content: `I awake\n    to empty fields,\n    and coyote bones\n    on my doorstep.\nThe trees,\n    like the dead,\n    are silent.\n\nMy strength\n    weeps out\n    from shattered limbs,\nand my breaths\n    heave\n    in flattened gasps,\n    dusty and yellow.\n\nI count days,\n    and collect poundings\n    against my skull,\n    bright and sharp.\n\nI thirst\n    for dewy consolation,\nbut my flesh\n    is stranger\n    to hope.\n\n\n\nStars dance\n    across a pale moonscape\nand the trails\n    of our trials\n    thresh through mud and stone,\ntaking away\n    the little and weak bones\n    we blindly\n    and desperately hold.`
    },
    {
        id: `dear-sister-and-friend`,
        title: `Dear Sister, Friend`,
        content: `Dear Sister, Friend,\n\n    Today I thought of you.\n\nI gaze over the fertile field\n    beyond my yard's edge,\nand stretching back over the grass,\n    recall your scent.\n\nBefore me is a flowering tree,\n    pure in its blossoming,\nand beyond my vision your face rises;\n    your name follows.\n\nAs you stand - gracious -\n    in my imagination,\nthe hearty soil grows richer underneath\n    and the colorful birdsongs multiply.\n\nBehind, in the house, the wide boards of soft wood floors\n    bend gently below your feet;\nbut it is my chest\n    that aches and creaks.\n\nHave you heard my home shift\n    from brick house to my heart?\nAnd there is room,\n    new,\n        for another.\n\nSo tomorrow I shall present open palms,\n    and ask for you\nin entirety.\n\nFor as the robin bares its breast to ascend\n    and bluejay shocks earthly neighbor with heavenly hue,\nso I hear from my bones drumming\n    for self-sacrifice that fills the womb,\n        and transforms full woman\n            into mother.\n`
    },
    {
        id: `edging-homeward`,
        title: `Edging Homeward`,
        content: `I am edging homeward by grace;\n                I am slipping with raucous pleasure to Hell;\nI am shyly accepting Hope;\n                I am gleefully slitting Hope's throat with habit.\n\nI am polishing\n    quiet, dusty dreams;\n                I am grinding diamonds\n                    against death.\n\n\n\n                I give myself in\n                    to myself and what I suffer;\n                    I fold, collapse,\n                        and I am waste.\n\nI give myself up\n    to this othersome joy\n    I know only by fearful awe;\n    I am filled, centered,\n        and held.\n\n\n\n    From here I depart,\n                always to the same;\n            \n            To here I return,\n        always more,\n            always changed.\n`
    },
    {
        id: `ending`,
        title: `Ending`,
        content: `The water is draining from the lake.\nThe wind-waves and sun-lines look unchanged,\n    but of them\n    there are less.\n\nAt the certain end,\n    (with wind and sun forever strong)\n    I wonder if there will be\n    a single comprehending crest and dazzling glisten,\n    if the whole lake,\n        now so small,\n    will let itself be changed\n    and become\n        entirely and purely\n    motion and glow.\n`
    },
    {
        id: `fatigue-raw`,
        title: `Fatigue, Raw`,
        content: `Every door is difficult to close,\nand the floor is covered in the dust\n    of my flesh.\nMy eyes ache,\n    my mouth is raw,\n        and I swell with fatigue.\n`
    },
    {
        id: `gold-resurrection`,
        title: `Gold Resurrection`,
        content: `Will you unearth it with me,\n    what I've come to find -\nwhat has been buried\n    through apathy, regrets; in short, wasted time?\nAnd no matter how coal-black\n    that dead weight may appear,\nI know we can bring it back to gold\n    with shared blood and hot tears;\n\nfor a dream across generations,\n    neglected, forgotten, unsung,\nmay become tarnished, rusted, and withered, but not yet undone;\n    for the threads of redemption\n    have never left our hands!\n\nAnd so, as son, father, let us finally join hands\n    to free, what we've been made to give and to share,\nfrom our selfish appetites and proclivity of despair,\n    and raise it on the wondrous mysterious frightening heights\n        of sacrificial love;\n    and watch, and ride together,\n        a new tidal wave of rising sun.`
    },
    {
        id: `golden-embers-alive`,
        title: `Golden Embers Alive`,
        content: `We rise like ashes of bonfire\n    on summer's trailing edge,\n    (we are golden embers alive)\ninto the towering depths\n    of liquid heaven above\n    we sink;\nwe are poured out\n    over aching woods and crumbling leaves,\n    over jagged shores and fierce deserts:\n\nWe are homebound,\n    finally resting ourselves in dusty origin,\n    now with eternal flame\n    immanent in our blood.\n`
    },
    {
        id: `great-dove`,
        title: `Great Dove`,
        content: `I remember Saturdays\n    before you,\n    good and filled,\n        but not fecund like this.\n\nThis evening glows with life,\n    and your deep rose-heart blossoms\n    under the falling sun.\n\nOur chests are crossed with charcoal,\n        remnants from last night's fire,\n    and memories of taste and sweat\n    stay with and guide me.\n\nI suffer you slowly, joyfully,\n    dancing with your heart (I'm barely tethered);\n        we will, soon enough,\n        rest, one and content.\n\nI watch as you lay,\n        back to ground,\n        with heart clamoring for home,\n    and I catch echoes of ancestors\n    through my quivering bones;\nfrom the rumble of soil -\n    Nature's dream, growling from Earth\n- to the surface of our skin,\nthe Great Dove's grace impels us to newness,\n    and He warmly thrusts His way\n    into our small home.\n`
    },
    {
        id: `i-fear-no-loss`,
        title: `I Fear No Loss`,
        content: `I fear no loss,\nbut gain.\n\nI laid in the earthy wheat;\nhungry and naked I lay,\nwaiting in shriveled, busy bones.\n\n---------------------\n\nToday, I saw the hawks overhead,\nand still I wait.\n\nI see the words approaching\nand I hold my breath;\nlest they enter and fill me,\nand I must rise changed.\n`
    },
    {
        id: `kitchen-rags`,
        title: `Kitchen Rags`,
        content: `Friend, Dear Friend,\n\n    I am sorry.\n\nWere I able to mend\nour hearts like kitchen rags,\n\n    I would gently\n    stitch us together.\n`
    },
    {
        id: `mary`,
        title: `Mary`,
        content: `[verse]\nSeeking hard-earned consolations\n    in light of heavy resignation,\nDays of nervous tribulation\n    tending to junk heart termination.\n\n[alternate verse 1]\nSeeking hard-earned consolation;\n    in place, lead weight: resignation.\nScarred, burning days of tribulation;\n    junk heart - termination.\n\n[chorus]\nIf I drown -\n    Will you give me rise from under?\nWhen the moon falls -\n    Will you lead me back to beauty?\n\n[verse]\nBroken hopes, bitter anticipation;\n    last chance, missed dance; twitching hesitation.\nSteel eyes, self-centered determination;\n    hard-morning examination.\n\n[chorus]\nCan I pull through\n    dark hours of heavy thunder?\nOnly when lightning strikes\n    do I know my heart.\n\n[chorus]\nBlest are you -\n    and I wish I could be gentle;\nPray for me -\n    at the hour of separation:\n\n    Take me through your heart\n        to the one you love.`
    },
    {
        id: `moonrise-summer`,
        title: `Moonrise Summer`,
        content: `Stars pop out\n    above moonrise,\nand I lay back,\n    on grass\n    in July heat;\n        arms released,\n        spread in surrender.\n\nThe clouds of ravens\n    spread with wonder over sunrise;\nwings of summer\n    beat mystic joy\n    into my trembling heart,\n        weak with wonder.\n`
    },
    {
        id: `owl-and-moon`,
        title: `Owl And Moon`,
        content: `Familiar sun glances\n    across deep summer sky,\n    and rests gently\n    on our golden home.\nSoon we will be bathed,\n    all faces bright,\n    in bonfire's amber glow.\n\nAs we soak\n    in the nectar of night\n    and embers dance\n    before our eyes -\n\nDad,\n    will you share\n    the telling with me,\n    again?\nHow the owls and the moon\n    bear witness to\n    and rejoice in\n    another full day lived?\n\nWill you recall for me\n    our holidays\n    traveling over gravel\n    and through sunsets\n    to Mama's parent's farm?\nI was small,\n    and I remember\n    pulling in near midnight,\n    and being greeted\n    with coffee and cards.\n\nI remember mornings\n    as promises fulfilled:\n    Christmas day, thickly white,\n    we were gathered\n    sharing, holding, giving gifts,\n    living\n    side-by-side.\n\nOh, now older,\n    with aching in my bones,\nI desire\n    to know\n    at depths too great\n    to forget,\nif these memories\n    of good nights and homes\n    will blend edges together,\n    becoming dappled panoramas,\n    living,\n    and solid as stone.\n\nFor I have decided:\n    I do not wish to disappear.\n    I want to stay, mixed,\n    living in our hot laughter,\n    quiet joy\n    and somber tears.\n\nI want to be fixed,\n    and have my place be permanent\n    at home:\nto remain attached\n    to the branch above,\n    and swing freely\n    in golden, gentle,\n    setting sun.\n`
    },
    {
        id: `rise-i-hope-we-dance`,
        title: `Rise (I Hope We Dance)`,
        content: `We stepped from hope\n    into dance\n    when we wed.\nI remember how\n    brush and glance\n    turned\n    to taste and touch,\nhow our great oak floors\n    turned\n    warm under the quiet morning sun;\nand how we learned\n    to dance together,\nthe flesh of our feet\n    wearing the wood,\n    my hands guiding your curves;\n\nWe\n    turned\n    about the spirit\n    keeping us\n    and\n    kept between us.\n\nAll our steps were new\n    and grounded,\n    planted in trust\n    and surrender.\nWe grew\n    together.\n\nUntil you\n    turned\n\n    inward\n    and\n    away.\n\nNow,\n    the clocks tick\n    without mercy.\n\nNow, the spirit moans,\n    and my hands are torn open;\nNow my feet are flayed,\n    numb on oak floor rotten;\nNow I taste\n    and caress\n    naught.\n\n    ...\n\nTo sweep the desert\n    bare with holy wind\n    until it be free of sand,\nto wander outside your cold house\n    until you walk out again,\nto dance with you on repeat\n    on fields of deep cool grass;\n\nI have fought,\nI have endured,\nand I hope,\n    yet -\n\nEven if your freedom\n    were again uncovered,\neven if you breathed\n    open warm air again,\neven if you heard your heart\n    beat in time with nature's song\n\n- I wonder if you\n    would rise,\n    release yourself,\nand step from stillborn rooms\n    into hot windy light,\nand again\n    join\n    our dance.\n`
    },
    {
        id: `sheltered-by-snow`,
        title: `Sheltered by Snow`,
        content: `Today I am sheltered by snow.\n\nI wait, pressed against window\n    to know of the cold,\nand yearn stiffly,\n    my heart taut\n    against hope for you.\n\nDo you remember my dreams?\nDo our shared nights bear weight\n    in your soul?\n\nI often walk through flowering fields,\n    gathering sweetest lillies;\nbut all of good earth and hearth\n    turns soon to dust,\n    carried away by wind.\n`
    },
    {
        id: `silent-birds`,
        title: `Silent Birds`,
        content: `I still gaze\n    into the emerging stars\n    at dusk.\n\nI used to wait\n    (do I still wish?)\n    for your womanly voice\n    as I began my walks home.\n\nI no longer laugh among our friends,\n    but with my hands clasped,\n    just wait for our joke to end.\n\nAnd the sight of silent birds\n    with wide black wings\n    is no longer unwelcome,\n    nor a surprise.\n\nMy skies are filled,\n    while my cupboards\n    remain bare.\n`
    },
    {
        id: `snowswept`,
        title: `Snowswept`,
        content: `Wind-caressed and snowswept;\nspoken in wonder, your name awakens hunger\nin the caverns of my chest.\n\nI am wandering, stuck-bent homebound,\ngently aching south now,\nfeeling tug of memories anchored in warmer days.\n\nWith my fiddle-neck rent, and heartstrings bent in wreck,\ndesires within my skin burn, and\nI am yearning for repair.\n\nYour face my fiery center seeks\nas I shuffle snow with slow, plodding feet.\nI keep my head turned sideways.\n\nEvery lawn white with sun-dappled space,\nevery door like a portal of grace,\ndraws me a rough sketch of your upcoming abode.\n\nUpon sight I'll know your home,\nso I'm bracing for the unveiling of this unknown:\n\nif my hopes - warm, steady, unseen like covered bones -\nwill be met when spoken;\nor if the real luster I perceive,\na glowing edge that gives me to dream,\nis only a dead trick - empty and cold -\na mere taunt of fool's gold.\n`
    },
    {
        id: `sometimes`,
        title: `Sometimes`,
        content: `Sometimes\n\nit seems to me\nthat the only worthy response\nI can give back to Life\nis\n\nsilence.\n`
    },
    {
        id: `spindle-trees`,
        title: `Spindle Trees`,
        content: `Spindle trees,\n    pale black\n    against willow cloud,\n    prick\n    evening breeze\n    with budding tips.`
    },
    {
        id: `sugar-lake`,
        title: `Sugar Lake`,
        content: `I do not remember the mornings,\nbut I can go back to the nights;\nI was in bed,\nready for sleep,\n    and young;\n    a boy.\n\n\n\nI opened my eyes, and saw my father.\nI think he was quiet,\n    perhaps asleep.\n\nI laid still, and my blood was warm,\nand it moved through my heart.\nIts founts were joys,\neach amplified by promises\n    of cousins,\n    of grandparents,\n    of my father's siblings;\n        all livened by my father's presence and word.\n\n\n\nI was a child then,\nand I am learning\n    to be young\n    again.\n\n\n\n\n\n----------------------------------\n\n\n\n\n\n\n\nI do not remember the mornings,\nbut I can go back to the nights;\nI was in bed,\nready for sleep,\n    and young;\n    a boy.\n\n\n\nI opened my eyes, and saw my father.\nI think he was quiet,\n    maybe asleep.\n\nThere was warmth in my blood,\nand it moved through my heart.\nIts founts were joys of the day,\namplified by promises\n    of cousins,\n    of grandparents,\n    of my father's siblings;\n        and strengthened by my father's words.\n\n\n\nI was a child then,\nand I am learning\n    to be young\n    again.\n`
    },
    {
        id: `swans-etch-heaven`,
        title: `Swans Etch Heaven`,
        content: `Swans etch heaven\n    across marbled glass,\nwriting your name by wingtip\n    into ruby blue sky.\n\n-------\n\nSwans etch heaven\n    across marbled glass,\ncarving your name cursive\n    into ruby blue sky.\n`
    },
    {
        id: `sweat-and-swallow`,
        title: `Sweat and Swallow`,
        content: `I sweat.\nI swallow.\nThe air billows over me,\nand my thighs strain and burn\nunder September sun.\n\nWe are miles away,\nand alone until the horizon;\nwe are like scuff marks against Earth,\npushing answers into our bones.\n`
    },
    {
        id: `swollen-tongue`,
        title: `Swollen Tongue`,
        content: `Plans my father made\n    lie before me\n    wrapped in fear\n    and covered by dust.\n\nI have closets and alleyways\n    packed in the crevices of my heart;\n    often moaning with blood,\n    I live in the stench of fear.\n\nI do not recognize sins\n    I have grown into\n    until I taste bad blood\n    from my swollen tongue.\n\nI hope you may ease into life\n    and rest gently\n    at its end.\n`
    },
    {
        id: `thin-air`,
        title: `Thin Air`,
        content: `Thin is our air,\n    and pale the sky.\n\nI stand on front stoop,\n    tongue cleaved to flesh,\n    and shiver softly\n        with hollow head.\n\nDear friend,\n    If the sun returns hot\n        to crash in dry tempest,\n        know that I have left early,\n            with only dust behind.\n\n    For though I am alien\n        to these streets,\n        all is familiar:\n\n    I know the blessed scent\n        of dark soil turned rich,\n    and the decay of man\n        steeped in wealth;\n\n    I have heard the screaming void\n        of raped autumn nights,\n    and the quiet hope\n        of gentle open evenings;\n\n    I have felt the heat\n        of crackling wreckage,\n    and the soft bed of prairie\n        wet with evening dew;\n    \n    I know the ends of our idols\n        and the joy of their burial.\n    \n    So if wind quits\n        and earth turns bare and burned,\n        you can walk by my door\n            without a knock\n        and traverse the hard trail\n            from cement to stone and dirt.\n    \n    Later, if by ditch\n        you find me,\n        rouse me without restraint;\n            my dreams I have woken into,\n                and I know our justice is late.\n        \n    Our future? It is beyond my sight;\n        but I sense it hangs,\n            slack in suspension,\n        waiting above our blue shadows\n            between sun-baked steeples.`
    },
    {
        id: `tips-of-flesh`,
        title: `Tips of Flesh`,
        content: `Tips of flesh,\nfresh with wind-nipped\nburn, coil around\ncoal-dark heat\nin cup, while\nnaked sun sinks\nover blue crystal\nstreets, sides piled\nrough with slush\nof travel-beaten\nHeaven's dust.\n\nOur blood and joy\nmix as voices\nmingle, and our\nspirits rise\nlike steam as stars\nmake sharp against\nglossy lavender sky,\nslit by spires\nand blazened by bells.\n`
    },
    {
        id: `toil-without-treasure`,
        title: `Toil Without Treasure`,
        content: `Toil, without treasure,\n    is time\n    without life.\n`
    },
    {
        id: `tonight-thunder`,
        title: `Tonight, Thunder`,
        content: `Tonight I expect thunder,\nand lightning to strike earth.\n\n\nThere are holes in our minds,\nand gaps between us;\nthe thread of soul\n    has slowly been pulled from us,\n    and we stand on hollow ground.\n\n\nThere are few straight cards in the deck,\nand night has just begun.\n\n\nMy chest aches with questions\nand my stomach sinks with certainty;\n    when answers come,\n    will we have remained?\n\n\nFor I hear fire trucks three blocks away,\nand their engines growl,\n    and loose bare-backed shiver-moans over our streets.\nTake hold, good and dear brothers and sisters,\n    and stay close, faithful wives,\nFor the ground is opening in labor,\n    and hot tears are being called forth from our eyes.\n\n\nThe surrounding silence is terrible,\n    for here our troubles\n    wait, unbound by form,\nand with certainty of worry\n    we are tempted\n    to relinquish dreams\n    to razor teeth.\n\n\nSubstance has departed and we are sinking:\n    There is nothing to gaze upon,\n        though vision remains.\n    There is no sustenance to feast upon,\n        so hunger grows.\n    There are no trumpets of angels;\n        else,\n            we have become deaf with waste.\n\n\nWho coiled this black monster,\n    and what follows his spreading breath?\n\n\n\n\nI desire not faith, anymore,\n    for I am certain of it:\nThe Good Man will rise through this,\n    though His children shiver\n    in their blood.\n\n`
    },
    {
        id: `twisted-tree`,
        title: `Twisted Tree`,
        content: `Under twisted tree\n    I sat\n    and wept,\n\nfor I woke early\n    amidst birdsong\n    and lily fragrance,\n\nand now, in evening heat,\n    our mouths are covered\n        in soot,\n    and our tongues\n        cleave tightly, to flesh\n        like dried bones.\n`
    },
    {
        id: `wet-earth-go-forward`,
        title: `Wet Earth (Go Forward)`,
        content: `Damp feet on wet earth,\nas the wind soaks the trees;\nthe moonlight's been a stranger\nsince you've gotten off your knees.\n\nSo draw in cold breath,\nremember when it was you began to see:\nwhen you were aching, seeking,\ndigging into grace with skinned knees.\n\nSo enter again,\npast wondrous sunrise warmth;\nyou must open your eyes, fully,\nto see the stars in the dark.\n\nFear not strange suffering,\nfor only through such can you know:\nthe gold that loss and leaving bring,\nthe good weight of a purified soul.\n`
    },
    {
        id: `woman-home`,
        title: `Woman (Home)`,
        content: `Woman,\n\n    I desire;\n\nTo build you a brick house\n    with wide wooden steps\n    coming up from the lawn.\n\nWe can lean a broom\n    on the front porch\n    and let friends,\n        like leaves,\n    gather.\n\nWe'll bunch them around bonfires,\n    so our laughter\n        may scatter like fireflies,\n    so open eyes\n        may glow\n        like coals.\n\nOur hearts we'll anchor\n    in kitchen heat amidst\n        scent of spice,\n    dapple with sun dust\n        on glorious August night,\n    and consecrate\n        on bedroom altar of work,\n        sweat, gift, and\n            sacrifice.\n\nYet,\n    before we touch\n    lit match to wick,\n    we bear shifting loads,\n        careful to follow in marked, narrow,\n        freshly-worn track.\n\n\n\nWoman,\n\n    I desire;\n\nTo enter dewy mornings\n    by your flesh,\n    and with you lay\n        soul-full,\n        star-draped,\n        under dusky sky.\n\nI desire to rest with you\n    in heat,\n    to gaze upward\n        into liquid heavens\n    and watch galaxies\n        pulse\n    like hot-blooded dreams.\n\nHaving glimpsed you,\n    my bones ache.\n\nBefore you,\n    I sweep my hearth\n        of dark ash,\n    and dash over amber coals,\n    eager to dance\n        in risky offer\n    for your empty\n        open hand;\n\n\n\nFor tomorrow,\n    I pine.\n\n\n\nFor now,\n    days yet collect\n    like treasured honey\n    in sun-browned burlap\n        deep across my shoulders.\n\nFor now,\n    weight...\nSoon,\n    Sweet Joy.`
    },
    {
        id: `woman-terrific-black-wings`,
        title: `Woman (Terrific Black Wings)`,
        content: `Woman,\n\n    I desire;\n\nTo guard the spark of life\n    beneath terrific black wings,\n    to inspire dread\n    in twisted hearts that\n    openly conspire to consume\n    soft flesh\n    of fresh life.\n\nAnd so I need\n    you to guide me back,\n    away from ravine edge,\n    to the wide level plain\n    of fertile faith:\n   \nFaith in love,\n    faith in joy,\n    faith in morning spent\n        gathering and breaking wood\n        for our hearth;\n    faith that night can come as friend\n        of deep rest\n        and just recompense.\n\nI wonder, now,\n    while wind blows through\n    bare brittle trees:\nwhat will become of\n    the names we have\n    imagined for our young?\nWill leaves take hold on bare branches?\nWhat will be borne\n    of the struggle we have shouldered\n    and our nearly-clotted blood?\nI wonder about seasons\n    turning over and over upon earth:\n    will we let them lay down\n        fresh, dark soil upon\n        our souls?\n\nI pine,\n    in the blue moments before full wakefulness,\n        for release from needle\n        sin and weighty despair,\n    to join hot palms\n    and dive into rich,\n        ecstatic goodness,\n        unchanging and ever-surprising,\n    to be consumed\n        and rise\n        with golden wind,\n    to soar\n        slow and steady\n        into a morn turning from\n        suffocation toward light,\n    to roam with strength\n        into open air.`
    },
    {
        id: `woodlands`,
        title: `Woodlands`,
        content: `When the woodlands have kept their leaves\nand quickly lost their color,\nWhen your voice echoes back clear\n    and without joy,\nWhen your days are filled\n    with a vibrant exchange of gifts\nand you yet feel life winding\n    down inside your chest;\n\nRemember\n    to set aside pleasures;\n    to feel the solid dirt below you\n        which will accept you;\n    to wait for Him, immediately;\n    to stand with calloused hands\n        unclenched.\n\nWhen the sun rises\n    through your morning window,\nwill you open it\n    and let your dreams go\n    into the hands of your creater?`
    },
    {
        id: `young-woman`,
        title: `Young Woman`,
        content: `Young woman,\n        with whom I will\n        gladly share my name:\n    I am a faulty wire\n        hot with current,\n        yearning for release.\n\nFor my dreams have been pent up for ages,\n        and my hands I have just untied.\n    I imagine you a safeguard\n        for my heart's hopes,\n        and a mighty sail\n        for its desires untried.\n`
    }
];
let state = {
    selectedPoem: null,
    showAboutInfo: false,
    scrollPosition: window.scrollY,
    scrollBreakpoints: determineScrollBreakpoints(window.innerHeight)
};
function updateState(action) {
    let nextState = state;
    switch(action.type){
        case ActionTag.UserScroll:
            nextState = updateScrollState(state, action.payload.y);
            break;
        case ActionTag.WindowResize:
            nextState = updateScrollBreakpoints(state, action.payload.height);
            break;
        case ActionTag.BrowserNavigateToPoem:
            addToSessionHistory(Page.POEM, action.payload.id);
            nextState = selectPoem(state, action.payload.id);
            break;
        case ActionTag.BrowserNavigationEvent:
            nextState = handleBrowserNavigationEvent(state, action.payload);
            break;
        case ActionTag.UserAboutOpen:
            addToSessionHistory(Page.ABOUT);
            nextState = openAboutSection(state);
            break;
        case ActionTag.UserAboutClose:
            addToSessionHistory(Page.HOME);
            nextState = closeAboutSection(state);
            break;
        case ActionTag.UserPoemLinkClick:
            addToSessionHistory(Page.POEM, action.payload.id);
            nextState = selectPoem(state, action.payload.id);
            break;
        case ActionTag.UserPoemViewerClose:
            addToSessionHistory(Page.HOME);
            nextState = deselectPoem(state);
            break;
    }
    const changed = state !== nextState;
    if (changed) {
        state = nextState;
    }
    return {
        state,
        changed
    };
}
function updateScrollState(state1, yPosition) {
    return {
        ...state1,
        scrollPosition: yPosition
    };
}
function updateScrollBreakpoints(state2, windowHeight) {
    return {
        ...state2,
        scrollBreakpoints: determineScrollBreakpoints(windowHeight)
    };
}
function handleBrowserNavigationEvent(state3, payload) {
    const poemID = getPoemIdFromQueryParameter(payload.url);
    const page = getPageFromBrowserNavigationPayload(payload);
    let nextState = state3;
    if (Page.ABOUT === page) {
        nextState = openAboutSection(nextState);
    } else {
        nextState = closeAboutSection(nextState);
    }
    if (poemID) {
        nextState = selectPoem(nextState, poemID);
    } else {
        nextState = deselectPoem(nextState);
    }
    return nextState;
}
function openAboutSection(state4) {
    return {
        ...state4,
        showAboutInfo: true
    };
}
function closeAboutSection(state5) {
    return {
        ...state5,
        showAboutInfo: false
    };
}
function selectPoem(state6, poemID) {
    const poem = getPoem(poemID);
    return {
        ...state6,
        selectedPoem: poem
    };
}
function deselectPoem(state7) {
    return {
        ...state7,
        selectedPoem: null
    };
}
function getPoem(poemID) {
    const poem1 = Poems.find((poem)=>poem.id === poemID
    );
    return poem1 ? {
        id: poem1.id,
        title: poem1.title,
        content: poem1.content
    } : null;
}
function determineScrollBreakpoints(windowHeight) {
    const initialPadding = windowHeight / 10;
    const introSectionSize = windowHeight;
    const introSectionOverlap = introSectionSize / 10;
    const INTRO_0_START = Math.round(initialPadding);
    const INTRO_0_END = Math.round(INTRO_0_START + introSectionSize);
    const INTRO_1_START = Math.round(INTRO_0_END - introSectionOverlap);
    const INTRO_1_END = Math.round(INTRO_1_START + introSectionSize);
    const INTRO_2_START = Math.round(INTRO_1_END - introSectionOverlap);
    const INTRO_2_END = Math.round(INTRO_2_START + introSectionSize);
    const INTRO_3_START = Math.round(INTRO_2_END - introSectionOverlap);
    const INTRO_3_END = Math.round(INTRO_3_START + introSectionSize);
    const INTRO_4_START = Math.round(INTRO_3_END - introSectionOverlap);
    const INTRO_4_END = Math.round(INTRO_4_START + introSectionSize);
    const INTRO_5_START = Math.round(INTRO_4_END - introSectionOverlap);
    const INTRO_5_END = Math.round(INTRO_5_START + introSectionSize);
    const EMBLEM_ANIMATION_START = INTRO_5_END;
    return {
        INTRO_0_START,
        INTRO_0_END,
        INTRO_1_START,
        INTRO_1_END,
        INTRO_2_START,
        INTRO_2_END,
        INTRO_3_START,
        INTRO_3_END,
        INTRO_4_START,
        INTRO_4_END,
        INTRO_5_START,
        INTRO_5_END,
        EMBLEM_ANIMATION_START
    };
}
var ElementID;
(function(ElementID1) {
    ElementID1["ABOUT"] = 'about';
    ElementID1["ABOUT_OPEN"] = 'about-open';
    ElementID1["ABOUT_CLOSE"] = 'about-close';
    ElementID1["INTRO"] = 'intro';
    ElementID1["INTRO_FINAL_LINE"] = 'intro-final-line';
    ElementID1["POEM_VIEWER"] = 'poem-viewer';
    ElementID1["POEM_VIEWER_TITLE"] = 'poem-viewer-title';
    ElementID1["POEM_VIEWER_CONTENT"] = 'poem-viewer-content';
    ElementID1["POEM_VIEWER_CLOSE"] = 'poem-viewer-close';
    ElementID1["EMBLEM"] = 'emblem-container';
    ElementID1["EMBLEM_FURROW_1"] = 'emblem-furrow-1';
    ElementID1["EMBLEM_FURROW_2"] = 'emblem-furrow-2';
    ElementID1["EMBLEM_FURROW_3"] = 'emblem-furrow-3';
    ElementID1["EMBLEM_FURROW_4"] = 'emblem-furrow-4';
    ElementID1["EMBLEM_FURROW_5"] = 'emblem-furrow-5';
    ElementID1["EMBLEM_FURROW_6"] = 'emblem-furrow-6';
    ElementID1["EMBLEM_FURROW_7"] = 'emblem-furrow-7';
    ElementID1["EMBLEM_FURROW_8"] = 'emblem-furrow-8';
    ElementID1["EMBLEM_FURROW_9"] = 'emblem-furrow-9';
    ElementID1["EMBLEM_FURROW_10"] = 'emblem-furrow-10';
    ElementID1["EMBLEM_FURROW_11"] = 'emblem-furrow-11';
    ElementID1["EMBLEM_MOON_CONTAINER"] = 'emblem-moon-container';
    ElementID1["EMBLEM_MOUNTAIN_LEFT"] = 'emblem-mountain-left';
    ElementID1["EMBLEM_MOUNTAIN_RIGHT"] = 'emblem-mountain-right';
    ElementID1["EMBLEM_GRAIN_LEFT_1_FILL"] = 'emblem-grain-left-1-fill';
    ElementID1["EMBLEM_GRAIN_LEFT_2"] = 'emblem-grain-left-2';
    ElementID1["EMBLEM_GRAIN_LEFT_3"] = 'emblem-grain-left-3';
    ElementID1["EMBLEM_GRAIN_LEFT_4"] = 'emblem-grain-left-4';
    ElementID1["EMBLEM_GRAIN_LEFT_5"] = 'emblem-grain-left-5';
    ElementID1["EMBLEM_GRAIN_LEFT_6"] = 'emblem-grain-left-6';
    ElementID1["EMBLEM_GRAIN_LEFT_7"] = 'emblem-grain-left-7';
    ElementID1["EMBLEM_GRAIN_LEFT_8"] = 'emblem-grain-left-8';
    ElementID1["EMBLEM_GRAIN_RIGHT_1"] = 'emblem-grain-right-1';
    ElementID1["EMBLEM_GRAIN_RIGHT_2"] = 'emblem-grain-right-2';
    ElementID1["EMBLEM_GRAIN_RIGHT_3"] = 'emblem-grain-right-3';
    ElementID1["EMBLEM_GRAIN_RIGHT_4"] = 'emblem-grain-right-4';
    ElementID1["EMBLEM_GRAIN_RIGHT_5"] = 'emblem-grain-right-5';
    ElementID1["EMBLEM_GRAIN_RIGHT_6"] = 'emblem-grain-right-6';
    ElementID1["EMBLEM_GRAIN_RIGHT_7"] = 'emblem-grain-right-7';
    ElementID1["EMBLEM_GRAIN_RIGHT_8"] = 'emblem-grain-right-8';
    ElementID1["EMBLEM_GRAIN_RIGHT_9"] = 'emblem-grain-right-9';
    ElementID1["EMBLEM_GRAIN_POINT"] = 'emblem-grain-point';
    ElementID1["EMBLEM_RIVER_FILL"] = 'emblem-river-fill';
})(ElementID || (ElementID = {}));
var ElementClass;
(function(ElementClass1) {
    ElementClass1["ANIMATE"] = 'animate';
    ElementClass1["HIDDEN"] = 'hidden';
    ElementClass1["INTRO_SECTION"] = 'intro-section';
})(ElementClass || (ElementClass = {}));
function getElementByID(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Failed to find element #${id}`);
    }
    return element ?? null;
}
function getElementsByClass(className, expectedNumber) {
    const elements = document.getElementsByClassName(className);
    if (expectedNumber && expectedNumber !== elements.length) {
        console.error(`the number of .${className} elements found differs from the number expected: expected ${expectedNumber}, found ${elements.length}`);
    }
    return elements;
}
function isVisible(id) {
    const element = getElementByID(id);
    return element ? !element.classList.contains(ElementClass.HIDDEN) : false;
}
function show(e) {
    removeClass(e, ElementClass.HIDDEN);
}
function hide(e) {
    addClass(e, ElementClass.HIDDEN);
}
function addClass(e, cls) {
    if ('string' === typeof e) {
        e = getElementByID(e);
    }
    e?.classList.add(cls);
}
function removeClass(e, cls) {
    if ('string' === typeof e) {
        e = getElementByID(e);
    }
    e?.classList.remove(cls);
}
function between(check, lower, upper) {
    return check >= lower && check < upper;
}
const delays = {
    furrows: {
        start: 8400,
        betweenFurrows: 300
    },
    grain: {
        leftHalf: 6300,
        rightHalf: 6100,
        point: 9900,
        bottomLeftLeaf: 7300,
        betweenLeaves: 400
    },
    moon: 9000,
    mountainLeft: 7000,
    mountainRight: 8500,
    river: 750
};
const durations = {
    furrow: 9000,
    grain: {
        bottomLeftLeaf: 2000,
        leaves: 3000
    },
    moon: 3500,
    mountainLeft: 5000,
    mountainRight: 2500,
    river: 8000
};
function handleEmblemAnimation(scrollPosition, scrollBreakpoints) {
    if (between(scrollPosition, scrollBreakpoints.EMBLEM_ANIMATION_START, Infinity)) {
        startAnimation();
    }
}
function startAnimation() {
    animateFurrows();
    animateGrain();
    animateMoon();
    animateMountain('left');
    animateMountain('right');
    animateRiverAndConnectedLeaf();
}
function animateFurrows() {
    const furrows = [
        ElementID.EMBLEM_FURROW_1,
        ElementID.EMBLEM_FURROW_2,
        ElementID.EMBLEM_FURROW_3,
        ElementID.EMBLEM_FURROW_4,
        ElementID.EMBLEM_FURROW_5,
        ElementID.EMBLEM_FURROW_6,
        ElementID.EMBLEM_FURROW_7,
        ElementID.EMBLEM_FURROW_8,
        ElementID.EMBLEM_FURROW_9,
        ElementID.EMBLEM_FURROW_10,
        ElementID.EMBLEM_FURROW_11
    ];
    furrows.forEach((elementID, index)=>animateFurrow(elementID, index)
    );
}
function animateFurrow(elementID, delayMultiplier) {
    const element = getElementByID(elementID);
    if (element) {
        element.animate({
            transform: [
                'scaleY(0)',
                'scaleY(1)'
            ]
        }, {
            duration: durations.furrow,
            easing: 'ease',
            fill: 'forwards',
            delay: delays.furrows.start + delays.furrows.betweenFurrows * delayMultiplier
        });
    }
}
function animateGrain() {
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_2, 'left', 2);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_3, 'left', 3);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_4, 'left', 4);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_5, 'left', 5);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_6, 'left', 6);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_7, 'left', 7);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_LEFT_8, 'left', 8);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_2, 'right', 2);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_3, 'right', 3);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_4, 'right', 4);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_5, 'right', 5);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_6, 'right', 6);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_7, 'right', 7);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_8, 'right', 8);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_RIGHT_9, 'right', 9);
    animateGrainLeaf(ElementID.EMBLEM_GRAIN_POINT, 'right', 10);
}
function animateGrainLeaf(elementID, side, leaf) {
    const element = getElementByID(elementID);
    if (element) {
        const delay = delays.river + (side === 'left' ? delays.grain.leftHalf : delays.grain.rightHalf) + Math.round(delays.grain.betweenLeaves * leaf);
        element.animate({
            opacity: [
                0,
                1
            ]
        }, {
            duration: durations.grain.leaves,
            easing: 'ease',
            fill: 'forwards',
            delay
        });
    }
}
function animateMoon() {
    const element = getElementByID(ElementID.EMBLEM_MOON_CONTAINER);
    if (element) {
        element.animate({
            opacity: [
                0,
                1
            ]
        }, {
            duration: durations.moon,
            easing: 'ease-in',
            fill: 'forwards',
            delay: delays.moon
        });
        element.animate({
            transform: [
                'translateY(10px)',
                'translateY(0)'
            ]
        }, {
            duration: durations.moon,
            easing: 'ease-out',
            fill: 'forwards',
            delay: delays.moon
        });
    }
}
function animateMountain(mountain) {
    const elementID = mountain === 'left' ? ElementID.EMBLEM_MOUNTAIN_LEFT : ElementID.EMBLEM_MOUNTAIN_RIGHT;
    const delay = mountain === 'left' ? delays.mountainLeft : delays.mountainRight;
    const duration = mountain === 'left' ? durations.mountainLeft : durations.mountainRight;
    const element = getElementByID(elementID);
    if (element) {
        element.animate({
            opacity: [
                0,
                1
            ]
        }, {
            duration,
            easing: 'ease-in',
            fill: 'forwards',
            delay
        });
    }
}
function animateRiverAndConnectedLeaf() {
    const river = getElementByID(ElementID.EMBLEM_RIVER_FILL);
    if (river) {
        river.animate({
            strokeWidth: [
                '2px',
                '80px'
            ],
            strokeDashoffset: [
                100,
                0
            ],
            'stroke-width': [
                '0',
                '45px'
            ],
            'stroke-dashoffset': [
                100,
                0
            ]
        }, {
            duration: durations.river,
            easing: 'linear',
            fill: 'forwards',
            delay: delays.river
        });
    }
    const leaf = getElementByID(ElementID.EMBLEM_GRAIN_LEFT_1_FILL);
    if (leaf) {
        leaf.animate({
            strokeWidth: [
                '2px',
                '20px'
            ],
            strokeDashoffset: [
                100,
                0
            ],
            'stroke-width': [
                '0',
                '20px'
            ],
            'stroke-dashoffset': [
                100,
                0
            ]
        }, {
            duration: durations.grain.bottomLeftLeaf,
            easing: 'linear',
            fill: 'forwards',
            delay: delays.grain.bottomLeftLeaf
        });
    }
}
function handleIntro(scrollPosition, scrollBreakpoints) {
    if (between(scrollPosition, scrollBreakpoints.INTRO_0_START, scrollBreakpoints.INTRO_5_END)) {
        handleIntroSection(0, scrollPosition, scrollBreakpoints);
        handleIntroSection(1, scrollPosition, scrollBreakpoints);
        handleIntroSection(2, scrollPosition, scrollBreakpoints);
        handleIntroSection(3, scrollPosition, scrollBreakpoints);
        handleIntroSection(4, scrollPosition, scrollBreakpoints);
        handleIntroSection(5, scrollPosition, scrollBreakpoints);
        show(ElementID.INTRO);
    } else {
        hide(ElementID.INTRO);
    }
}
function handleIntroSection(sectionIndex, scrollPosition, scrollBreakpoints) {
    const section = getSection(sectionIndex);
    if (section) {
        const [start, end] = getBreakpoints(sectionIndex, scrollBreakpoints);
        if (between(scrollPosition, start, end)) {
            setPosition(section, scrollPosition, start, end);
            setOpacity(section, scrollPosition, start, end);
            show(section);
        } else {
            hide(section);
        }
    } else {
        console.error(`could not find intro section ${sectionIndex}`);
    }
}
function getSection(sectionIndex) {
    return getElementsByClass(ElementClass.INTRO_SECTION, 6).item(sectionIndex);
}
function getBreakpoints(sectionIndex, breakpoints) {
    switch(sectionIndex){
        case 0:
            return [
                breakpoints.INTRO_0_START,
                breakpoints.INTRO_0_END
            ];
        case 1:
            return [
                breakpoints.INTRO_1_START,
                breakpoints.INTRO_1_END
            ];
        case 2:
            return [
                breakpoints.INTRO_2_START,
                breakpoints.INTRO_2_END
            ];
        case 3:
            return [
                breakpoints.INTRO_3_START,
                breakpoints.INTRO_3_END
            ];
        case 4:
            return [
                breakpoints.INTRO_4_START,
                breakpoints.INTRO_4_END
            ];
        case 5:
            return [
                breakpoints.INTRO_5_START,
                breakpoints.INTRO_5_END
            ];
        default:
            console.error(`TODO: Write an error message`);
            return [
                0,
                0
            ];
    }
}
function setPosition(section, scrollPosition, scrollBoundLow, scrollBoundHigh) {
    const positionRange = window.innerHeight / 2;
    const positionCenter = window.innerHeight / 2;
    const positionLimitLow = positionCenter - positionRange / 2;
    const positionLimitHigh = positionCenter + positionRange / 2;
    const elementPosition = getElementPosition(scrollPosition, scrollBoundLow, scrollBoundHigh, positionLimitLow, positionLimitHigh);
    section.style.translate = `0 ${elementPosition}px`;
}
function getElementPosition(scrollPosition, scrollBoundLow, scrollBoundHigh, positionLimitLow, positionLimitHigh) {
    const scrollPositionNormalized = normalize(scrollPosition, scrollBoundLow, scrollBoundHigh);
    const elementPositionNormalized = applyPositionEasing(scrollPositionNormalized);
    const positionRange = positionLimitHigh - positionLimitLow;
    const positionRangeCenter = positionLimitLow + positionRange / 2;
    const elementPositionDelta = elementPositionNormalized * positionRange;
    return positionLimitHigh - (elementPositionDelta + positionRangeCenter);
}
function applyPositionEasing(i) {
    return (Math.pow(2 * i - 1, 3) + 2 * i + 1) / 4;
}
function applyOpacityEasing(i) {
    return -Math.pow(2 * i - 1, 2) + 1;
}
function setOpacity(section, scrollPosition, scrollBoundLow, scrollBoundHigh) {
    const scrollPositionNormalized = normalize(scrollPosition, scrollBoundLow, scrollBoundHigh);
    const opacity = applyOpacityEasing(scrollPositionNormalized);
    section.style.opacity = `${opacity}`;
}
function normalize(i, rangeStart, rangeEnd) {
    return (i - rangeStart) / (rangeEnd - rangeStart);
}
function openPoemViewer(poem) {
    setPoemViewerData(poem.title, poem.content);
    show(ElementID.POEM_VIEWER);
}
function closePoemViewer() {
    hide(ElementID.POEM_VIEWER);
    setPoemViewerData('', '');
}
function setPoemViewerData(title, content) {
    const titleElement = getElementByID(ElementID.POEM_VIEWER_TITLE);
    if (titleElement) {
        titleElement.textContent = title;
    }
    const contentElement = getElementByID(ElementID.POEM_VIEWER_CONTENT);
    if (contentElement) {
        contentElement.textContent = content;
    }
}
function conformUiToState(state1) {
    const poemIsSelected = !!state1.selectedPoem;
    const referToScrollPosition = !poemIsSelected && !state1.showAboutInfo;
    if (state1.showAboutInfo !== isVisible(ElementID.ABOUT)) {
        if (state1.showAboutInfo) {
            show(ElementID.ABOUT);
        } else {
            hide(ElementID.ABOUT);
        }
    }
    if (poemIsSelected !== isVisible(ElementID.POEM_VIEWER)) {
        if (poemIsSelected) {
            openPoemViewer(state1.selectedPoem);
        } else {
            closePoemViewer();
        }
    }
    if (referToScrollPosition) {
        handleIntro(state1.scrollPosition, state1.scrollBreakpoints);
        handleEmblemAnimation(state1.scrollPosition, state1.scrollBreakpoints);
    }
}
let respondingToScrollEvent = false;
let respondingToResizeEvent = false;
window.onload = ()=>{
    registerNavigationHandlers();
    registerClickHandlers();
    registerScrollHandler();
    registerResizeHandler();
    handleQueryParameters();
};
function registerNavigationHandlers() {
    window.onpopstate = (event)=>{
        const url = getUrl();
        const data = event.state;
        createAndProcessAction(ActionTag.BrowserNavigationEvent, {
            url,
            data
        });
    };
}
function registerClickHandlers() {
    handleClick(ElementID.ABOUT_OPEN, createAction(ActionTag.UserAboutOpen));
    handleClick(ElementID.ABOUT_CLOSE, createAction(ActionTag.UserAboutClose));
    handleClick(ElementID.POEM_VIEWER_CLOSE, createAction(ActionTag.UserPoemViewerClose));
    config.poetry.poems.forEach((poem)=>handleClick(poem.id, createAction(ActionTag.UserPoemLinkClick, {
            id: poem.id
        }))
    );
}
function handleClick(elementID, action) {
    if (action) {
        const element = getElementByID(elementID);
        if (element) {
            element.onclick = ()=>processAction(action)
            ;
        }
    } else {
        console.warn(`attempted to handle a click event without an action - elementID: ${elementID}`);
    }
}
function registerScrollHandler() {
    document.addEventListener('scroll', handleScrollEvent);
}
function handleScrollEvent() {
    const lastKnownScrollPosition = window.scrollY;
    if (!respondingToScrollEvent) {
        requestAnimationFrame(()=>{
            createAndProcessAction(ActionTag.UserScroll, {
                y: lastKnownScrollPosition
            });
            respondingToScrollEvent = false;
        });
    }
    respondingToScrollEvent = true;
}
function registerResizeHandler() {
    window.addEventListener('resize', handleResizeEvent);
}
function handleResizeEvent() {
    if (!respondingToResizeEvent) {
        requestAnimationFrame(()=>{
            createAndProcessAction(ActionTag.WindowResize, {
                height: window.innerHeight
            });
            respondingToResizeEvent = false;
        });
    }
    respondingToResizeEvent = true;
}
function handleQueryParameters() {
    const poemID = getPoemIdFromQueryParameter();
    if (poemID) {
        createAndProcessAction(ActionTag.BrowserNavigateToPoem, {
            id: poemID
        });
    }
}
function createAndProcessAction(actionTag, payload) {
    const action = createAction(actionTag, payload);
    if (action) {
        processAction(action);
    }
}
function processAction(action) {
    const { state: state2 , changed  } = updateState(action);
    if (changed) {
        conformUiToState(state2);
    }
}
