import SwiftUI

/// 快捷入口 2×2：记录看病、记录症状、上传报告、用药计划
struct HomeQuickActionsView: View {
    private let columns = [
        GridItem(.flexible(), spacing: 12),
        GridItem(.flexible(), spacing: 12)
    ]

    var body: some View {
        LazyVGrid(columns: columns, spacing: 16) {
            HomeQuickActionCard(
                title: "记录看病",
                subtitle: "记录日常并监测",
                icon: "cross.case.fill",
                color: Color(hex: 0x7EC1FF),
                backgroundColor: Color(hex: 0xEEF6FF)
            )
            HomeQuickActionCard(
                title: "记录症状",
                subtitle: "时刻关注TA",
                icon: "heart.fill",
                color: Color(hex: 0xFF9EB5),
                backgroundColor: Color(hex: 0xFFF0F3)
            )
            HomeQuickActionCard(
                title: "上传报告",
                subtitle: "配料表识别分析",
                icon: "doc.fill",
                color: HomeDesign.accentOrange,
                backgroundColor: Color(hex: 0xFDF3E7)
            )
            HomeQuickActionCard(
                title: "用药计划",
                subtitle: "一键建档终身陪伴",
                icon: "pills.fill",
                color: Color(hex: 0x68D391),
                backgroundColor: Color(hex: 0xF0F9F4)
            )
        }
        .frame(height: 304)
    }
}

#Preview {
    HomeQuickActionsView()
        .padding()
}
