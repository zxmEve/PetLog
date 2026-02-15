import SwiftUI

struct HomeView: View {
    @Environment(\.managedObjectContext) private var viewContext

    var body: some View {
        NavigationStack {
            ZStack(alignment: .bottom) {
                // 设计稿 Body：背景、内边距、内容区
                ScrollView {
                    VStack(spacing: 16) {
                        HomeHeaderView()
                        HomeMainView()
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 48)
                    .padding(.bottom, 112)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(HomeDesign.pageBackground)

                HomeTabBarView()
            }
            .navigationBarHidden(true)
        }
    }
}

#Preview {
    HomeView()
        .environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
}
