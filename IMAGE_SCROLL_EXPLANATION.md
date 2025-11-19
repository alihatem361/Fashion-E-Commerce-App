# شرح آلية عمل السكرول للصور (Image Scroll)

## المكونات الأساسية

### 1. **useRef Hook**

```tsx
const scrollViewRef = useRef<ScrollView>(null);
```

- يُستخدم للحصول على مرجع (reference) للـ ScrollView
- يسمح لنا بالتحكم في السكرول برمجياً (programmatically)
- `<ScrollView>` هو النوع المتوقع للمرجع
- `null` هي القيمة الابتدائية

### 2. **State للصورة الحالية**

```tsx
const [currentImageIndex, setCurrentImageIndex] = useState(0);
```

- يتتبع رقم الصورة المعروضة حالياً
- يبدأ من `0` (أول صورة)
- يتم تحديثه عند السكرول أو الضغط على الأسهم

### 3. **ربط الـ ref بالـ ScrollView**

```tsx
<ScrollView
  ref={scrollViewRef}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  onMomentumScrollEnd={(event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentImageIndex(index);
  }}
>
```

#### شرح الـ Props:

- **`ref={scrollViewRef}`**: ربط المرجع بالعنصر
- **`horizontal`**: السكرول أفقي (من اليمين لليسار)
- **`pagingEnabled`**: السكرول يتوقف عند كل صفحة/صورة
- **`showsHorizontalScrollIndicator={false}`**: إخفاء شريط السكرول
- **`onMomentumScrollEnd`**: يتم استدعاؤه عند انتهاء حركة السكرول

#### كيف يعمل `onMomentumScrollEnd`:

```tsx
const index = Math.round(event.nativeEvent.contentOffset.x / width);
```

- `contentOffset.x`: المسافة التي تم السكرول إليها أفقياً
- `width`: عرض الشاشة
- القسمة على `width` تعطي رقم الصورة
- `Math.round()`: تقريب الرقم لأقرب عدد صحيح

**مثال:**

- إذا كان `contentOffset.x = 0` → الصورة رقم `0`
- إذا كان `contentOffset.x = 400` وعرض الشاشة `400` → `400/400 = 1` → الصورة رقم `1`
- إذا كان `contentOffset.x = 800` → `800/400 = 2` → الصورة رقم `2`

## دوال التنقل (Navigation Functions)

### 1. **الانتقال للصورة السابقة**

```tsx
const handlePrevImage = () => {
  if (currentImageIndex > 0) {
    const newIndex = currentImageIndex - 1;
    scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
    setCurrentImageIndex(newIndex);
  }
};
```

#### شرح خطوة بخطوة:

1. **`if (currentImageIndex > 0)`**: تحقق أننا لسنا في أول صورة
2. **`const newIndex = currentImageIndex - 1`**: حساب رقم الصورة السابقة
3. **`scrollViewRef.current?.scrollTo(...)`**:
   - `scrollViewRef.current` → الوصول للـ ScrollView
   - `?.` → optional chaining (للتأكد من وجود المرجع)
   - `scrollTo()` → دالة للانتقال إلى موضع معين
4. **`{ x: newIndex * width, animated: true }`**:
   - `x`: الموضع الأفقي المطلوب الانتقال إليه
   - `newIndex * width`: حساب الموضع (رقم الصورة × عرض الشاشة)
   - `animated: true`: الانتقال بحركة انيميشن سلسة
5. **`setCurrentImageIndex(newIndex)`**: تحديث الـ state

**مثال عملي:**

- الصورة الحالية: `2`
- الصورة الجديدة: `2 - 1 = 1`
- الموضع المطلوب: `1 * 400 = 400px`
- النتيجة: السكرول إلى `400px` بانيميشن

### 2. **الانتقال للصورة التالية**

```tsx
const handleNextImage = () => {
  if (currentImageIndex < product.images.length - 1) {
    const newIndex = currentImageIndex + 1;
    scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
    setCurrentImageIndex(newIndex);
  }
};
```

#### الفرق الوحيد:

1. **`if (currentImageIndex < product.images.length - 1)`**:
   - التحقق أننا لسنا في آخر صورة
   - `product.images.length - 1` لأن الفهرسة تبدأ من `0`
2. **`const newIndex = currentImageIndex + 1`**:
   - إضافة `1` بدلاً من الطرح

**مثال:**

- إذا كان عدد الصور = `5`
- آخر صورة index = `4` (لأن الفهرسة من 0 إلى 4)
- الشرط: `currentImageIndex < 4`
- لو كنا في صورة `3` → يمكن الانتقال لـ `4`
- لو كنا في صورة `4` → لا يمكن الانتقال (آخر صورة)

## ربط الأزرار بالدوال

```tsx
<TouchableOpacity style={styles.prevArrow} onPress={handlePrevImage}>
  <Ionicons name="chevron-back" size={24} color={COLORS.text} />
</TouchableOpacity>

<TouchableOpacity style={styles.nextArrow} onPress={handleNextImage}>
  <Ionicons name="chevron-forward" size={24} color={COLORS.text} />
</TouchableOpacity>
```

- عند الضغط على السهم الأيسر → `handlePrevImage` → السكرول للصورة السابقة
- عند الضغط على السهم الأيمن → `handleNextImage` → السكرول للصورة التالية

## المؤشرات (Indicators)

```tsx
<View style={styles.imageIndicators}>
  {product.images.map((_, index) => (
    <View
      key={index}
      style={[
        styles.indicator,
        index === currentImageIndex && styles.activeIndicator,
      ]}
    />
  ))}
</View>
```

### كيف تعمل:

1. عمل loop على كل الصور
2. رسم نقطة (دائرة صغيرة) لكل صورة
3. **`index === currentImageIndex`**: إذا كان رقم الصورة يساوي الصورة الحالية
4. إضافة style `activeIndicator` للنقطة النشطة (تصبح أطول/أغمق)

## تدفق العمل الكامل (Complete Flow)

### السيناريو 1: المستخدم يسحب بإصبعه (Swipe)

1. المستخدم يسحب الشاشة يميناً أو يساراً
2. الـ ScrollView ينتقل للصورة التالية تلقائياً (بسبب `pagingEnabled`)
3. عند انتهاء الحركة، يتم تنفيذ `onMomentumScrollEnd`
4. حساب رقم الصورة الجديدة من `contentOffset.x`
5. تحديث `currentImageIndex`
6. المؤشرات تتحدث تلقائياً لتعكس الصورة الحالية

### السيناريو 2: المستخدم يضغط على السهم

1. المستخدم يضغط على سهم التالي/السابق
2. يتم استدعاء `handleNextImage` أو `handlePrevImage`
3. التحقق من إمكانية الانتقال
4. حساب رقم الصورة الجديدة
5. استخدام `scrollTo()` للانتقال بانيميشن
6. تحديث `currentImageIndex` يدوياً
7. المؤشرات تتحدث تلقائياً

## الخلاصة

### المكونات الرئيسية:

✅ **useRef** → للتحكم في السكرول برمجياً  
✅ **useState** → لتتبع الصورة الحالية  
✅ **ScrollView** → لعرض الصور بشكل قابل للسكرول  
✅ **onMomentumScrollEnd** → للكشف عن السكرول اليدوي  
✅ **scrollTo()** → للسكرول البرمجي (عبر الأزرار)

### التفاعلات:

🔄 **السكرول اليدوي** → يحدث `currentImageIndex` تلقائياً  
🔄 **الأزرار** → تستدعي `scrollTo()` وتحدث `currentImageIndex` يدوياً  
🔄 **المؤشرات** → تتفاعل مع `currentImageIndex` للعرض المرئي

هذا النظام يضمن تزامن مثالي بين:

- موضع السكرول الفعلي
- رقم الصورة المخزن في الـ state
- المؤشرات المرئية للمستخدم
