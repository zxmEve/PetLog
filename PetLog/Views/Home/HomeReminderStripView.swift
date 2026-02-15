import SwiftUI

/// 提醒条：「每天都有一只小美好在等你」+ 「设置提醒」
struct HomeReminderStripView: View {
    var body: some View {
        HStack {
            Image(systemName: "bell.badge.fill")
                .font(.system(size: 16))
                .foregroundColor(HomeDesign.accentOrange)
            Text("每天都有一只小美好在等你")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(Color(hex: 0x9A3412).opacity(0.7))
                .padding(.leading, 8)
            Spacer(minLength: 0)
            Text("设置提醒")
                .font(.system(size: 12, weight: .bold))
                .foregroundColor(HomeDesign.accentOrange)
            Image(systemName: "chevron.right")
                .font(.system(size: 10, weight: .bold))
                .foregroundColor(HomeDesign.accentOrange)
        }
        .padding(13)
        .background(HomeDesign.reminderBg)
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(HomeDesign.reminderBorder, lineWidth: 1)
        )
        .clipShape(RoundedRectangle(cornerRadius: 16))
    }
}

#Preview {
    HomeReminderStripView()
        .padding()
}
