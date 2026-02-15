import SwiftUI

// 设计稿颜色（来自 figma Body.tsx）
enum HomeDesign {
    static let pageBackground = Color(hex: 0xFFF9F2)
    static let cardBackground = Color.white
    static let cardShadow = Color.orange.opacity(0.08)
    static let primaryText = Color(hex: 0x1E293B)
    static let secondaryText = Color(hex: 0x94A3B8)
    static let accentOrange = Color(hex: 0xFF8A3D)
    static let borderLight = Color(hex: 0xFFEDD5)
    static let reminderBg = Color(hex: 0xFFF7ED).opacity(0.5)
    static let reminderBorder = Color(hex: 0xFFEDD5).opacity(0.5)
    static let sectionTitleAccent = Color(hex: 0xFF8A3D)
}

extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: alpha
        )
    }
}
