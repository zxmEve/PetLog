import SwiftUI

/// 单条近期记录：左侧图标 + 日期/标题/描述
struct HomeRecordRowView: View {
    let date: String
    let dateColor: Color
    let title: String
    let desc: String
    let icon: String
    let iconBg: Color

    var body: some View {
        HStack(alignment: .top, spacing: 16) {
            ZStack {
                RoundedRectangle(cornerRadius: 16)
                    .fill(iconBg)
                    .frame(width: 48, height: 48)
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .stroke(Color.white, lineWidth: 4)
                    )
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(dateColor)
            }
            VStack(alignment: .leading, spacing: 4) {
                Text(date)
                    .font(.system(size: 12, weight: .bold))
                    .foregroundColor(dateColor)
                Text(title)
                    .font(.system(size: 14, weight: .bold))
                    .foregroundColor(HomeDesign.primaryText)
                Text(desc)
                    .font(.system(size: 12, weight: .regular))
                    .foregroundColor(Color(hex: 0x64748B))
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
    }
}

#Preview {
    HomeRecordRowView(
        date: "10月24日",
        dateColor: HomeDesign.accentOrange,
        title: "年度疫苗接种",
        desc: "狂犬病和DHPP加强免疫。",
        icon: "checkmark.circle.fill",
        iconBg: Color(hex: 0xFFEDD5)
    )
    .padding()
}
