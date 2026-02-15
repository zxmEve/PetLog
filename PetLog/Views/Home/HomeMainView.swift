import SwiftUI

/// 主内容区：快捷入口四宫格 + 近期记录（设计稿 Main）
struct HomeMainView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 24) {
            HomeQuickActionsView()
            HomeRecentRecordsView()
        }
    }
}

#Preview {
    HomeMainView()
        .padding()
}
