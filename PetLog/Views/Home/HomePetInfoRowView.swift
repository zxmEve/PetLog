import SwiftUI

/// 宠物信息行：头像 + 名字与标签 + 右侧「今日待办 / 0 项」
struct HomePetInfoRowView: View {
    var body: some View {
        HStack(alignment: .center, spacing: 0) {
            HomePetAvatarView()
            VStack(alignment: .leading, spacing: 8) {
                HStack(spacing: 0) {
                    Text("密密")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundColor(HomeDesign.primaryText)
                    // 设计稿中的小猫图标占位
                    Image(systemName: "pawprint.fill")
                        .font(.system(size: 12))
                        .foregroundColor(HomeDesign.accentOrange)
                }
                HStack(spacing: 6) {
                    HomeTagView(text: "布偶猫", bg: Color(hex: 0xF5E6FF), fg: Color(hex: 0xA855F7))
                    HomeTagView(text: "3天", bg: Color(hex: 0xE6F4FF), fg: Color(hex: 0x0EA5E9))
                    HomeTagView(text: "3.5kg", bg: Color(hex: 0xFFF0E6), fg: HomeDesign.accentOrange)
                }
            }
            .padding(.leading, 16)
            Spacer(minLength: 0)
            Text("今日待办 / ")
                .font(.system(size: 11, weight: .medium))
                .foregroundColor(HomeDesign.secondaryText)
            + Text("0")
                .font(.system(size: 18, weight: .bold))
                .foregroundColor(HomeDesign.accentOrange)
            + Text(" 项")
                .font(.system(size: 11, weight: .medium))
                .foregroundColor(HomeDesign.secondaryText)
        }
    }
}

#Preview {
    HomePetInfoRowView()
        .padding()
}
