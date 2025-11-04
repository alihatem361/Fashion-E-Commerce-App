# 🛍️ Fashion E-Commerce App

A modern, elegant fashion e-commerce mobile application built with React Native and Expo. Features a beautiful pink/purple aesthetic design with smooth onboarding experience and intuitive product browsing.

## ✨ Features

### 🎨 Beautiful UI/UX

- Modern fashion-forward design with soft pink/purple color palette
- Smooth animations and transitions
- Responsive layout for both iOS and Android
- Clean and intuitive interface

### 📱 Core Functionality

- **Onboarding Flow**: Beautiful 3-slide introduction to the app
- **Product Catalog**: Browse fashion items with images, prices, and ratings
- **Product Details**: View detailed product information with:
  - Multiple product images in a carousel
  - Size selection (S, M, L, XL)
  - Color variants
  - Product descriptions
  - Add to cart functionality
- **Category Browsing**: Filter by Casual, Business, Sport, Classic, and Trend
- **Search**: Quick product search functionality
- **Favorites**: Mark products as favorites

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd rn-first-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run the app**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Press `w` to open in web browser
   - Press `a` to open Android emulator
   - Press `i` to open iOS simulator

## 📁 Project Structure

```
rn-first-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen with product catalog
│   │   └── _layout.tsx        # Tab navigation layout
│   ├── onboarding.tsx         # Onboarding flow screens
│   ├── product-details.tsx    # Product detail page
│   └── _layout.tsx            # Root navigation layout
├── components/
│   ├── themed-text.tsx        # Themed text component
│   ├── themed-view.tsx        # Themed view component
│   └── ui/                    # UI components
├── constants/
│   └── theme.ts               # Color themes and constants
├── hooks/                     # Custom React hooks
└── assets/                    # Images and static files
```

## 🎨 Color Palette

```javascript
const COLORS = {
  background: "#FDF5FF", // Light lavender background
  primary: "#FFB6E1", // Pink
  secondary: "#D8B4E2", // Light purple
  text: "#1A1A1A", // Dark text
  textLight: "#666666", // Light gray text
  white: "#FFFFFF", // White
  card: "#F5E6FF", // Card background
};
```

## 🛠️ Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **Expo Router** - File-based navigation
- **TypeScript** - Type safety
- **AsyncStorage** - Local data persistence
- **Ionicons** - Icon library

## 📱 Screens

1. **Onboarding** - First-time user experience with 3 slides
2. **Home** - Product catalog with categories and search
3. **Product Details** - Detailed product view with size/color selection

## 🔧 Configuration

The app uses Expo's file-based routing. To modify routes:

- Edit files in the `app/` directory
- Navigation is automatic based on file structure

## 📦 Key Dependencies

```json
{
  "@react-native-async-storage/async-storage": "^2.1.0",
  "expo": "~54.0.0",
  "expo-router": "~4.0.0",
  "react-native": "0.76.5",
  "@expo/vector-icons": "^14.0.0"
}
```

## 🚧 Future Enhancements

- Shopping cart functionality
- User authentication
- Payment integration
- Order history
- Product reviews and ratings
- Wishlist management
- Push notifications
- Social sharing

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please open an issue on the repository.
