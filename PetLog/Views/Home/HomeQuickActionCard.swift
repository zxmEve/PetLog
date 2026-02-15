import SwiftUI

/// 单个快捷入口卡片：图标 + 标题 + 副标题
struct HomeQuickActionCard: View {
    let title: String
    let subtitle: String
    let icon: String
    let color: Color
    let backgroundColor: Color

    var body: some View {
        VStack(spacing: 4) {
            ZStack(alignment: .topTrailing) {
                Circle()
                    .fill(color)
                    .frame(width: 48, height: 48)
                    .shadow(color: HomeDesign.cardShadow, radius: 24, x: 0, y: 8)
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(.white)
            }
            .padding(.bottom, 12)
            Text(title)
                .font(.system(size: 14, weight: .bold))
                .foregroundColor(HomeDesign.primaryText)
            Text(subtitle)
                .font(.system(size: 10, weight: .regular))
                .foregroundColor(HomeDesign.secondaryText)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 20)
        .background(backgroundColor)
        .clipShape(RoundedRectangle(cornerRadius: 40))
    }
}

#Preview {
    HomeQuickActionCard(
        title: "记录看病",
        subtitle: "记录日常并监测",
        icon: "cross.case.fill",
        color: Color(hex: 0x7EC1FF),
        backgroundColor: Color(hex: 0xEEF6FF)
    )
    .frame(width: 160)
}
