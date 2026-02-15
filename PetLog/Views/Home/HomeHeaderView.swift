import SwiftUI

/// 首页顶部卡片：宠物信息行 + 今日待办 + 提醒条（设计稿 Header）
struct HomeHeaderView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            // 宠物信息行：头像 + 名字/标签 + 今日待办
            HomePetInfoRowView()
            // 提醒条
            HomeReminderStripView()
        }
        .padding(20)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(HomeDesign.cardBackground)
        .clipShape(RoundedRectangle(cornerRadius: 24))
        .shadow(color: HomeDesign.cardShadow, radius: 24, x: 0, y: 8)
    }
}

#Preview {
    HomeHeaderView()
        .padding()
}
