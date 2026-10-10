// =====================================================================
//  قائمة الأغاني — Song list
// ---------------------------------------------------------------------
//  title   : the answer shown to the player (show name, as people know it)
//  aliases : other spellings / English names that should also be accepted
//
//  Each song uses ONE of these sources:
//  youtube : the full YouTube link (or just the video ID).
//  file    : path to an audio file in the audio/ folder (exact 0.1s clips).
//
//  start   : second where the clip begins. Decimals are fine: 2.5
//            Point it at the first real note — skip any logo sound/silence.
//            Tip: open the site with ?test=5 at the end of the address to
//            play song #5 (counting from 0) and tune its start.
//
//  Two songs can share the same title (e.g. two Digimon intros) — both count as that answer.
//  ⚠ To ADD songs later without changing upcoming days, add them at the END.
// =====================================================================

const SONGS = [
  { title: "أكاديمية الشرطة",        aliases: ["police academy"],                  youtube: "0IeH_seQXC0", start: 0 },
  { title: "هزيم الرعد",              aliases: [],                                   youtube: "wcMh6jHdC5Q", start: 0 },
  { title: "باص المدرسة العجيب",      aliases: ["magic school bus"],                youtube: "pctpiLeVZAU", start: 0 },
  { title: "أجنحة الكاندام",          aliases: ["gundam wing", "gundam", "جاندام"], youtube: "_bIqva4VNt0", start: 0 },
  { title: "النمر المقنع",            aliases: ["tiger mask"],                       youtube: "LRbye-zpmks", start: 0 },
  { title: "عهد الأصدقاء",            aliases: [],                                   youtube: "BYmcd8I4qcQ", start: 0 },
  { title: "أنا وأخي",                aliases: [],                                   youtube: "7t_Ht6v4GkQ", start: 0 },
  { title: "أنا وأختي",               aliases: [],                                   youtube: "dB95J8Pa49c", start: 0 },
  { title: "أبطال الديجيتال",         aliases: ["digimon", "ديجيمون"],              youtube: "EMGjiPvo89I", start: 0 },
  { title: "سابق ولاحق",              aliases: ["let's and go", "lets go"],          youtube: "aVps7M4DH4s", start: 0 },
  { title: "الشبح",                   aliases: [],                                   youtube: "S_NYUfSf3TA", start: 0 },
  { title: "ون بيس",                  aliases: ["one piece"],                        youtube: "PCVXntb8WiE", start: 0 },
  { title: "دروبي",                   aliases: ["do re bi", "دو ري بي"],            youtube: "Fc0LTrUSxKE", start: 0 },
  { title: "المقاتل النبيل",          aliases: [],                                   youtube: "pcrSBmF9zh4", start: 0 },
  { title: "باتمان",                  aliases: ["batman", "بات مان"],               youtube: "bu6EBd3rPmI", start: 0 },
  { title: "أبطال الديجيتال",         aliases: ["digimon", "ديجيمون"],              youtube: "1onjKMGZj2M", start: 0 },
  { title: "الحديقة السرية",          aliases: ["secret garden"],                    youtube: "KyWUlkKD_yY", start: 0 },
  { title: "رياح الشمال",             aliases: [],                                   youtube: "oslLM6lHJdo", start: 0 },
  { title: "بائعة الكبريت",           aliases: ["match girl"],                       youtube: "71aau2qMeXo", start: 0 },
  { title: "الصياد الجريء",           aliases: [],                                   youtube: "Jfk7MDwhhpY", start: 0 },
  { title: "دراغون بول",              aliases: ["dragon ball", "دراجون بول"],       youtube: "WsyNv1DR8XQ", start: 0 },
  { title: "فرسان الأرض",             aliases: [],                                   youtube: "NlBefQp8arI", start: 0 },
  { title: "سلام دانك",               aliases: ["slam dunk"],                        youtube: "WevtBmOU5qY", start: 0 },
  { title: "كابتن ماجد",              aliases: ["captain tsubasa", "الكابتن ماجد"], youtube: "y_hGiiGp0Xc", start: 0 },
  { title: "أسرار الغابة",            aliases: [],                                   youtube: "cH9SyG-UJgg", start: 0 },
  { title: "أوف سايد",                aliases: ["offside", "اوفسايد"],              youtube: "ZEW5BHx6urU", start: 0 },
  { title: "القناص",                  aliases: ["hunter x hunter", "hunter"],        youtube: "JOz8CVQjTuA", start: 0 },
  { title: "دراغون بول",              aliases: ["dragon ball", "دراجون بول"],       youtube: "Ad5KfP3r1lE", start: 0 },
  { title: "لحن الحياة",              aliases: [],                                   youtube: "Mh85CCQ_BTk", start: 0 },
  { title: "شوت",                     aliases: ["shoot"],                            youtube: "BicsIpASXCc", start: 0 },
  { title: "بيدا بول",                aliases: [],                                   youtube: "wT8_ubolb4g", start: 0 },
  { title: "القط الأسود",             aliases: ["black cat"],                        youtube: "P0hzk7xI1b4", start: 0 },
  { title: "ريمي",                    aliases: ["remi"],                             youtube: "8yHf-RIEiOU", start: 0 },

  // ✗ This link didn't load (deleted, private or embedding blocked) — check it, fill in the title, then uncomment:
  // { title: "", aliases: [], youtube: "Qg8OVfI4mYo", start: 0 },
];

// =====================================================================
//  Extra answer choices — shows that appear in the guess list but are
//  never the song of the day. They make guessing harder.
//  When you give one of these a song, move it into SONGS (at the end).
// =====================================================================
const EXTRA_TITLES = [
  { title: "المحقق كونان", aliases: ["detective conan", "كونان"] },
  { title: "بوكيمون",      aliases: ["pokemon"] },
  { title: "ناروتو",       aliases: ["naruto"] },
  { title: "بي بليد",      aliases: ["beyblade"] },
  { title: "يوغي يو",      aliases: ["yu-gi-oh", "yugioh"] },
  { title: "سالي",         aliases: ["sally"] },
  { title: "هايدي",        aliases: ["heidi"] },
  { title: "فلونة",        aliases: ["flone"] },
  { title: "زينة ونحول",   aliases: ["maya the bee"] },
  { title: "جزيرة الكنز",  aliases: ["treasure island"] },
  { title: "عدنان ولينا",  aliases: ["future boy conan"] },
  { title: "ماوكلي",       aliases: ["mowgli", "jungle book"] },
];
