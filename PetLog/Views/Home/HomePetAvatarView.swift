import SwiftUI

/// 宠物头像：64pt 圆、描边 #ffedd5
struct HomePetAvatarView: View {
    var body: some View {
        Circle()
            .fill(Color(hex: 0xE2E8F0))
            .overlay(
                Image(systemName: "cat.fill")
                    .font(.system(size: 28))
                    .foregroundColor(HomeDesign.secondaryText)
            )
            .overlay(
                Circle()
                    .stroke(HomeDesign.borderLight, lineWidth: 2)
            )
            .frame(width: 64, height: 64)
    }
}

#Preview {
    HomePetAvatarView()
}
