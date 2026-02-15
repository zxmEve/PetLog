# PetLog

SwiftUI App，使用 Core Data 作为本地存储。

## 结构

```
PetLog/
├── App/
│   └── PetHealthAppApp.swift    # SwiftUI App 入口（@main），注入 managedObjectContext
├── Views/
│   └── Home/
│       ├── HomeView.swift
│       ├── PetCardView.swift
│       └── HealthSummaryView.swift
├── Models/
├── ViewModels/
├── CoreData/
│   ├── Persistence.swift        # Core Data 栈，支持 preview
│   └── PetLog.xcdatamodeld      # 数据模型（占位实体 Item）
└── Resources/
```

## 在 Xcode 中打开

1. 新建项目：File → New → Project，选 **App**，Interface 选 **SwiftUI**，勾选 **Use Core Data**，Lifecycle 选 **SwiftUI App**。
2. 将本目录下的 `PetLog` 文件夹内所有文件加入工程（或替换生成的同名文件）。
3. 确保 target 的 **Build Phases** 中包含 `CoreData/PetLog.xcdatamodeld`。

或直接在本目录用 Xcode 创建新 App 项目（同名 PetLog），然后替换/合并上述文件。

## Core Data

- 模型名：`PetLog`（与 `Persistence.swift` 中 `NSPersistentContainer(name:)` 一致）。
- 在 Xcode 中双击 `CoreData/PetLog.xcdatamodeld` 可编辑实体与属性。
