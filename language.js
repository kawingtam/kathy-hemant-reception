// Keep one page and the original form controls in both languages.
const chineseCopy = {
  'Skip to our story': '跳至我們的故事',
  'Kathy and Hemant, home': 'Kathy 與 Hemant，首頁',
  'Main navigation': '主選單',
  'Our journey': '我們的旅程', 'Our families': '我們的家人',
  'The celebration': '婚宴詳情', 'RSVP': '出席回覆',
  'Together with our families': '與摯愛家人一同誠邀您',
  'A world of stories. A lifetime together.': '各自走過萬千風景，從此攜手共度一生。',
  'THE NEXT CHAPTER': '幸福的新篇章', 'DESTINATION': '下一站', 'Love': '愛', 'CALIFORNIA': '加州',
  'Kathy and Hemant as a smiling seated chibi couple': '微笑並肩而坐的 Kathy 與 Hemant 卡通肖像',
  'Our favourite adventure': '最美好的旅程', 'is just beginning.': '此刻才剛開始。',
  'Wedding reception': '婚宴', '11 October 2026 · 6 PM': '2026年10月11日 · 晚上6時',
  'Newark, California': '美國加州紐瓦克', 'Please RSVP by 9/30.': '敬請於9月30日前回覆。',
  'Follow our journey': '走進我們的故事', '01 / Across the miles': '01 / 跨越山海',
  'Different places.': '來自不同的地方。', 'One beautiful story.': '寫下同一個美好故事。',
  'Two worlds, two families, and so much love.': '兩個世界，兩個家庭，滿滿的愛。',
  'From Hong Kong and Bangalore to a celebration in California.': '從香港與班加羅爾出發，在加州共聚，見證幸福。',
  'With love from': '帶着愛，來自', 'Hong Kong': '香港', 'Bangalore': '班加羅爾',
  'Little Kathy': '小時候的 Kathy', 'Little Hemant': '小時候的 Hemant',
  'to a lifetime': '攜手一生', 'of adventures': '共赴每段旅程',
  'And somehow, all roads led to us.': '走過的每一段路，原來都通往彼此。',
  '02 / Our favourite people': '02 / 最親愛的家人', 'Two families.': '兩個家庭。',
  'One beautiful beginning.': '一個幸福的開始。',
  'Hover over a loved one, or tap to say hello.': '將游標移到家人身上，或輕點一下，認識我們的摯愛。',
  'Meet our loved ones': '認識我們的家人', 'Kathy’s family': 'Kathy 的家人', 'Hemant’s family': 'Hemant 的家人',
  'The bride’s side': '新娘的家人', 'The groom’s side': '新郎的家人',
  'Grandma': '祖母', 'Kathy’s grandmother': 'Kathy 的祖母', 'Kathy’s father': 'Kathy 的爸爸',
  'Kathy’s mother': 'Kathy 的媽媽', "Kathy's sister": 'Kathy 的姊妹', 'Kathy’s sister': 'Kathy 的姊妹',
  'The bride': '新娘', 'The groom': '新郎', 'Hemant’s mother': 'Hemant 的媽媽',
  'Hemant’s father': 'Hemant 的爸爸', 'Hemant’s grandmother': 'Hemant 的祖母',
  "Hemant's uncle": 'Hemant 的叔舅輩家人', "Hemant's cousin": 'Hemant 的堂／表親',
  'Kathy and Hemant': 'Kathy 與 Hemant', 'Different worlds, same heartbeat.': '來自不同的世界，懷着同樣的愛。',
  '03 / The next destination': '03 / 下一站，幸福', 'Let’s celebrate together': '邀您一同分享喜悅',
  'Open the original reception invitation at full size': '查看完整中文婚宴請柬',
  'Get directions': '查看路線', '04 / Save your place': '04 / 期待與您相聚',
  'Will you join us?': '您會來與我們同慶嗎？', 'We’d love to celebrate with you.': '期待與您一起，留下這份美好回憶。',
  'Your name': '您的姓名', '(required)': '（必填）', 'Plus-one’s name': '同行賓客姓名', '(optional)': '（選填）',
  'First and last name': '請填寫全名', 'Dietary restrictions': '飲食需求', '(select all that apply)': '（可選多項）',
  'No restrictions': '無特別需求', 'Vegetarian': '蛋奶素', 'Vegan': '純素', 'Gluten-free': '無麩質',
  'Dairy-free': '不含奶類', 'Nut allergy': '堅果過敏', 'Other': '其他', 'Other dietary needs': '其他飲食需求',
  'Tell us about allergies or other needs, and who they apply to.': '請告訴我們任何食物過敏或其他需求，並註明是哪位賓客。',
  'RSVP registration is not open yet. Please check back soon.': '出席回覆尚未開放，請稍後再來查看。',
  'RSVP opens soon': '即將開放回覆', 'Please enable JavaScript to send your RSVP.': '請啟用 JavaScript 以提交出席回覆。',
  'Send RSVP': '送出回覆', 'Please let us know any dietary needs so we can plan for you.': '請告訴我們您的飲食需求，讓我們為您妥善安排。',
  'Try again': '再次嘗試', 'We couldn’t confirm your RSVP. Your details are still here. Please try again.': '暫時未能確認您的回覆。您填寫的資料已保留，請再試一次。',
  'Please enter your name.': '請填寫您的姓名。', 'Sending…': '傳送中…', 'Sending your RSVP…': '正在傳送您的出席回覆…',
  'Your RSVP has been received. We can’t wait to celebrate with you!': '已收到您的回覆，期待與您一同分享喜悅！', 'RSVP sent': '回覆已送出',
  'The journey continues': '幸福旅程，繼續前行', 'All together,': '期待與您，', 'soon.': '不久相聚。',
  'Kathy and Hemant standing together': '並肩站立的 Kathy 與 Hemant',
  'Different places. Same home.': '來自不同地方，從此有了共同的家。',
  'A little closer, a little fuller, together.': '因為彼此，更親近，更圓滿。',
  'With love, Kathy & Hemant': '滿懷愛意，Kathy 與 Hemant',
  'California · 2026 · Made for a lifetime': '加州 · 2026 · 攜手一生', 'Back to the beginning ↑': '回到故事的起點 ↑',
  'Kathy & Hemant · A beautiful journey': 'Kathy 與 Hemant · 幸福旅程',
  'Join Kathy and Hemant for a wedding reception in Newark, California. Two families, a beautiful journey, and a new chapter together.': '誠邀您出席 Kathy 與 Hemant 在加州紐瓦克的婚宴。兩個家庭，一段美好旅程，一同展開幸福新篇章。',
  'Mydhili K Nair and Hari Kumar R invite you to the wedding reception of Hemant and Kathy, daughter of Shu Ya Guan and Yuen Yum Tam. Sunday, October 11, 2026 at 6 PM. Oasis Palace, 35145 Newark Blvd, Newark, CA 94560.': 'Hemant 與 Kathy 誠邀您一同見證幸福。婚宴於2026年10月11日（星期日）晚上6時舉行，地點為 Oasis Palace · Dynasty Hall，35145 Newark Blvd, Newark, CA 94560。'
};

const languageDialog = document.querySelector('#language-dialog');
const languageToggle = document.querySelector('#language-toggle');
const translatedNodes = new Map();
const translatedAttributes = [];
const normalizeCopy = text => text.trim().replace(/\s+/g, ' ');
const translateCopy = text => {
  const key = normalizeCopy(text);
  if (chineseCopy[key]) return text.replace(key === text ? key : /\S[\s\S]*\S|\S/, chineseCopy[key]);
  // Family button labels combine a name with the same translated relationship.
  if (key.includes(' — ')) return key.split(' — ').map(part => chineseCopy[part] || part).join(' — ');
  return text;
};
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, #language-dialog, #language-toggle, [lang="zh-Hant"]')) continue;
  if (translateCopy(node.textContent) !== node.textContent) translatedNodes.set(node, node.textContent);
}
document.querySelectorAll('[aria-label], [alt], [placeholder], meta[name="description"]').forEach(element => {
  for (const attribute of ['aria-label', 'alt', 'placeholder', 'content']) {
    if (element.hasAttribute(attribute)) translatedAttributes.push([element, attribute, element.getAttribute(attribute)]);
  }
});
function setLocalizedText(element, english) {
  // RSVP updates replace text nodes; register the new state for later switches.
  for (const node of translatedNodes.keys()) if (node.parentElement === element) translatedNodes.delete(node);
  element.textContent = english;
  translatedNodes.set(element.firstChild, english);
  if (document.documentElement.lang === 'zh-Hant') element.firstChild.textContent = translateCopy(english);
}
function setLanguage(language) {
  document.documentElement.lang = language;
  translatedNodes.forEach((english, node) => { node.textContent = language === 'en' ? english : translateCopy(english); });
  translatedAttributes.forEach(([element, attribute, english]) => element.setAttribute(attribute, language === 'en' ? english : translateCopy(english)));
  const invitation = document.querySelector('.actual-invite');
  const invitationImage = invitation.querySelector('img');
  const chinese = language === 'zh-Hant';
  const invitationPath = chinese ? 'assets/invitation-chinese.png' : 'assets/invitation-original.png';
  invitation.href = invitationPath;
  invitationImage.src = invitationPath;
  invitationImage.width = chinese ? 1429 : 1014;
  invitationImage.height = chinese ? 2000 : 1394;
  languageToggle.textContent = language === 'en' ? '中文 / EN' : 'EN / 中文';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Choose language' : '選擇語言');
  languageDialog.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
}
languageDialog.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
  setLanguage(button.dataset.language);
  languageDialog.close();
  languageToggle.focus({preventScroll: true});
}));
languageToggle.hidden = false;
languageToggle.addEventListener('click', () => languageDialog.showModal());
setLanguage('en');
languageDialog.showModal();
