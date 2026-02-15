import SwiftUI

/// 近期记录区块：标题「近期记录」+ 全部 + 时间线列表
struct HomeRecentRecordsView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 24) {
            HStack {
                Rectangle()
                    .fill(HomeDesign.sectionTitleAccent)
                    .frame(width: 6, height: 16)
                    .clipShape(Capsule())
                Text("近期记录")
                    .font(.system(size: 16, weight: .bold))
                    .foregroundColor(HomeDesign.primaryText)
                Spacer()
                Button { } label: {
                    HStack(spacing: 2) {
                        Text("全部")
                            .font(.system(size: 12, weight: .regular))
                            .foregroundColor(HomeDesign.secondaryText)
                        Image(systemName: "chevron.right")
                            .font(.system(size: 10))
                            .foregroundColor(HomeDesign.secondaryText)
                    }
                }
            }
            VStack(alignment: .leading, spacing: 24) {
                HomeRecordRowView(
                    date: "10月24日",
                    dateColor: HomeDesign.accentOrange,
                    title: "年度疫苗接种",
                    desc: "狂犬病和DHPP加强免疫。未发现异常反应。",
                    icon: "checkmark.circle.fill",
                    iconBg: Color(hex: 0xFFEDD5)
                )
                HomeRecordRowView(
                    date: "10月20日",
                    dateColor: Color(hex: 0x7EC1FF),
                    title: "体重记录",
                    desc: "3.5 kg  +0.2 kg",
                    icon: "scalemass.fill",
                    iconBg: Color(hex: 0xEFF6FF)
                )
                HomeRecordRowView(
                    date: "10月15日",
                    dateColor: Color(hex: 0xFF9EB5),
                    title: "日常体征",
                    desc: "精神状态良好，食欲正常，毛发顺滑。",
                    icon: "heart.fill",
                    iconBg: Color(hex: 0xFDF2F8)
                )
            }
            .padding(.leading, 16)
            .overlay(
                Rectangle()
                    .fill(Color(hex: 0xFFF7ED))
                    .frame(width: 2)
                    .padding(.leading, 23),
                alignment: .leading
            )
        }
        .padding(20)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(HomeDesign.cardBackground)
        .clipShape(RoundedRectangle(cornerRadius: 24))
        .shadow(color: HomeDesign.cardShadow, radius: 24, x: 0, y: 8)
    }
}

#Preview {
    HomeRecentRecordsView()
        .padding()
}
