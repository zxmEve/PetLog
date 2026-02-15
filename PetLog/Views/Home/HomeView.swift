import SwiftUI

struct HomeView: View {
    @Environment(\.managedObjectContext) private var viewContext

    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                PetCardView()
                HealthSummaryView()
            }
            .navigationTitle("PetLog")
        }
    }
}

#Preview {
    HomeView()
        .environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
}
