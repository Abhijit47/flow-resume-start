export type AwardEntry = {
  id: string; // 'f2595504-8b90-4226-9388-75026f1a0073';
  isHidden: boolean; //false;
  showPlaceholder: boolean; // false;
  createdAt: string; // '2026-07-01T14:50:28.524Z';
  updatedAt: string; // '2026-07-01T14:50:28.524Z';

  date?: {
    day: string; // '2';
    year: string; // '2025';
    month: string; // '3';
    hideDay: boolean; // true;
    hideMonth: boolean; // false;
  };
  issuer?: string; // 'award issueer name 1';
  awardTitle?: string; // 'award';
  description?: string; // html:'<p>award issueer desc 1</p>';
  awardTitleLink?: string; // 'https://award1.com';
};
