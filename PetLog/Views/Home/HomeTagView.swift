import SwiftUI

/// 小标签：圆角 6、内边距 8×2
struct HomeTagView: View {
    let text: String
    let bg: Color
    let fg: Color

    var body: some View {
        Text(text)
            .font(.system(size: 10, weight: .bold))
            .foregroundColor(fg)
            .padding(.horizontal, 8)
            .padding(.vertical, 2)
            .background(bg)
            .clipShape(RoundedRectangle(cornerRadius: 6))
    }
}

#Preview {
    HStack {
        HomeTagView(text: "布偶猫", bg: Color(hex: 0xF5E6FF), fg: Color(hex: 0xA855F7))
        HomeTagView(text: "3天", bg: Color(hex: 0xE6F4FF), fg: Color(hex: 0x0EA5E9))
    }
}
