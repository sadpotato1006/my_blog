import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/line.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "悲伤破忒头",
	bio: "救赎之道 就在其中",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "#",
		},
		{
			name: "Mail",
			icon: "fa7-regular:envelope",
			url: "mailto:zhangzzx06@gmail.com",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/sadpotato1006",
		},
	],
};
