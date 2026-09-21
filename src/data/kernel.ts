export type KernelContribution = {
  title: string;
  commit: string;
  href: string;
  cve?: string;
  score?: number;
};

// Mainline commits and Linux CNA CVSS 3.1 scores verified 21 September 2026.
export const kernelContributions: KernelContribution[] = [
  {
    title: "Bluetooth: btrtl: validate firmware patch bounds",
    commit: "609c5b04a28d",
    href: "https://github.com/torvalds/linux/commit/609c5b04a28dc1b0f3af6a7bc93055135b2d2059",
    cve: "CVE-2026-68479",
    score: 7.8,
  },
  {
    title: "drm/panel: samsung-s6d16d0: Power off on prepare failure",
    commit: "a9f950adfe21",
    href: "https://github.com/torvalds/linux/commit/a9f950adfe2147318d75e7a6eab5e814851802ac",
  },
  {
    title: "iio: light: gp2ap002: Disable regulators on resume failure",
    commit: "a41000ba3a23",
    href: "https://github.com/torvalds/linux/commit/a41000ba3a230bed1e422f283486ff8f77fe0d30",
  },
  {
    title: "wifi: mt76: mt7921: validate CLC firmware records",
    commit: "9417c5818a01",
    href: "https://github.com/torvalds/linux/commit/9417c5818a0146980c2608fda94c908e604eb033",
  },
  {
    title: "wifi: mt76: mt7996: validate default EEPROM firmware size",
    commit: "653c6e289b13",
    href: "https://github.com/torvalds/linux/commit/653c6e289b13cc6942f3e8f8e3c568e70fa42d1f",
    cve: "CVE-2026-80933",
    score: 7.8,
  },
  {
    title: "firmware: coreboot: Validate table bounds",
    commit: "a58a57a1076f",
    href: "https://github.com/torvalds/linux/commit/a58a57a1076f8c5dae0327e3710899478c3be901",
    cve: "CVE-2026-90341",
    score: 7.7,
  },
  {
    title: "Bluetooth: hci_aml: validate firmware segment lengths",
    commit: "2bf6b9baca93",
    href: "https://github.com/torvalds/linux/commit/2bf6b9baca9372ea51b6d0f2820dc9bf29a83ef4",
    cve: "CVE-2026-80759",
  },
  {
    title: "Bluetooth: hci_event: validate LE Set CIG Parameters response",
    commit: "0acd4eeb4b22",
    href: "https://github.com/torvalds/linux/commit/0acd4eeb4b225b9bebbf9ef96cc10cdd79b94899",
    cve: "CVE-2026-80763",
  },
  {
    title: "Bluetooth: hci_event: fix out-of-bounds read in LE PA report reassembly",
    commit: "e3643fbddb25",
    href: "https://github.com/torvalds/linux/commit/e3643fbddb257c928c075cab05bbd929106b56ee",
  },
  {
    title: "io_uring/query: cap user size passed to copy_struct_to_user",
    commit: "ba77efee1b95",
    href: "https://github.com/torvalds/linux/commit/ba77efee1b95b4ad7559b1cdbe7cd7fa36dca95b",
    cve: "CVE-2026-81009",
  },
  {
    title: "Bluetooth: btintel: validate version TLV value lengths",
    commit: "a086c0892969",
    href: "https://github.com/torvalds/linux/commit/a086c0892969bf8a0151b0f12bd14a68827c88b2",
  },
  {
    title: "Bluetooth: btintel: bound firmware ID by TLV length",
    commit: "ac8aa9e0ec93",
    href: "https://github.com/torvalds/linux/commit/ac8aa9e0ec93a12a60230066f199f49c3b9aac3d",
  },
  {
    title: "Bluetooth: btintel: propagate version TLV parsing errors",
    commit: "3a74624b5dea",
    href: "https://github.com/torvalds/linux/commit/3a74624b5deae7f5e2b98e638687fbf9594a9781",
  },
  {
    title: "wifi: mt76: mt7921: skip unknown CLC firmware records",
    commit: "1a296bfd3e77",
    href: "https://github.com/torvalds/linux/commit/1a296bfd3e775e515233f746218824fc7dd5ff16",
  },
  {
    title: "Bluetooth: hci_codec: validate vendor codec count length",
    commit: "d0795cfd6f65",
    href: "https://github.com/torvalds/linux/commit/d0795cfd6f655f4de84868a4f4bb41a03f037b3d",
  },
];
