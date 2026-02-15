import SwiftUI

/// 底部 Tab 栏：首页、社区、消息、Ta的 + 中间「添加」（设计稿 Nav）
struct HomeTabBarView: View {
    @State private var selectedIndex = 0

    var body: some View {
        HStack(alignment: .bottom, spacing: 0) {
            tabItem(icon: "house.fill", label: "首页", index: 0)
            tabItem(icon: "person.3.fill", label: "社区", index: 1)
            ZStack {
                Circle()
                    .fill(HomeDesign.accentOrange)
                    .frame(width: 56, height: 56)
                    .overlay(
                        Circle()
                            .stroke(Color.white, lineWidth: 4)
                    )
                    .shadow(color: HomeDesign.cardShadow, radius: 24, x: 0, y: 8)
                Image(systemName: "plus")
                    .font(.system(size: 24, weight: .medium))
                    .foregroundColor(.white)
            }
            .offset(y: -20)
            .onTapGesture { }
            tabItem(icon: "message.fill", label: "消息", index: 2)
            tabItem(icon: "pawprint.fill", label: "Ta的", index: 3)
        }
        .padding(.top, 12)
        .padding(.bottom, 34)
        .frame(maxWidth: .infinity)
        .background(
            Color.white.opacity(0.95)
                .background(.ultraThinMaterial)
        )
        .overlay(
            Rectangle()
                .fill(HomeDesign.reminderBorder)
                .frame(height: 1),
            alignment: .top
        )
    }

    private func tabItem(icon: String, label: String, index: Int) -> some View {
        let isSelected = selectedIndex == index
        return Button {
            selectedIndex = index
        } label: {
            VStack(spacing: 4) {
                Image(systemName: icon)
                    .font(.system(size: index == 0 ? 16 : 20))
                    .foregroundColor(isSelected ? HomeDesign.accentOrange : HomeDesign.secondaryText)
                Text(label)
                    .font(.system(size: 10, weight: .bold))
                    .foregroundColor(isSelected ? HomeDesign.accentOrange : HomeDesign.secondaryText)
            }
            .frame(maxWidth: .infinity)
        }
        .buttonStyle(.plain)
    }
}

#Preview {
    VStack {
        Spacer()
        HomeTabBarView()
    }
}
