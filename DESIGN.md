# Dizayn Spesifikasiyası

## Rəng Palitrası

### Işıq Rejimi (Light Mode)

```
--background: oklch(1 0 0)                    // Ağ rəng
--foreground: oklch(0.153 0.006 107.1)        // Tünd qara/boz
--primary: oklch(0.228 0.013 107.4)            // Tünd rəng
--primary-foreground: oklch(0.988 0.003 106.5) // Açıq ağ
--secondary: oklch(0.966 0.005 106.5)          // Çox açıq
--secondary-foreground: oklch(0.228 0.013 107.4)
--accent: oklch(0.966 0.005 106.5)             // Açıq rəng
--muted: oklch(0.966 0.005 106.5)              // Açıq boz
--muted-foreground: oklch(0.58 0.031 107.3)    // Orta boz
--border: oklch(0.93 0.007 106.5)              // Açıq qırmızı
--input: oklch(0.93 0.007 106.5)               // Daxil qapısı
--destructive: oklch(0.577 0.245 27.325)       // Qırmızı (xəbərdarlıq)
--ring: oklch(0.737 0.021 106.9)               // Focus halqası
```

### Tünd Rejimi (Dark Mode)

```
--background: oklch(0.153 0.006 107.1)         // Tünd qara fon
--foreground: oklch(0.988 0.003 106.5)         // Ağ mətin
--primary: oklch(0.93 0.007 106.5)             // Açıq rəng
--primary-foreground: oklch(0.228 0.013 107.4) // Tünd mətin
--secondary: oklch(0.286 0.016 107.4)          // Tünd ikinci
--secondary-foreground: oklch(0.988 0.003 106.5)
--accent: oklch(0.286 0.016 107.4)             // Tünd vurğu
--muted: oklch(0.286 0.016 107.4)              // Tünd boz
--muted-foreground: oklch(0.737 0.021 106.9)   // Açıq boz mətin
--sidebar-primary: oklch(0.488 0.243 264.376)  // Bənövşəyi rəng (Sidebar)
--destructive: oklch(0.704 0.191 22.216)       // Tünd qırmızı
```

### Xüsusi Rənglər

```
--olive-500: Xüsusi kişi (Başlıq vurğusu)
--olive-200: Xüsusi açıq kişi (Vurğu fon)
--neutral-700: Tünd neytral (Kart mətin)
--ring: oklch(0.737 0.021 106.9)               // Focus halqası
```

## Tipografiya

**Əsas Font Ailəsi:**

- Font: JetBrains Mono Variable
- Fallback: monospace

**Başlıqlar:**

- `<h1>`: text-4xl, font-bold, text-center
- `<h3>`: text-xl
- CardTitle: text-lg, font-medium

**Mətin:**

- Body: text-xs/relaxed (xəbərdarlıq mətn)
- Normal: text-[1rem]
- Card mətin: text-[1rem] text-neutral-700

## Boşluqlar (Spacing)

### Padding

```
Card Header:    px-4, py-2
Card Content:   px-4
Card:           py-4
Card Footer:    p-4
Button:         lg: h-9 gap-1.5 px-2.5
Article:        mb-10 (aşağıya boşluq)
Projects:       pb-5 (aşağıya boşluq)
```

### Gaps (Aralar)

```
Buttons arasında:     gap-x-5 (horizontal)
Cards arasında:       gap-y-5 (mobile)
                      gap-x-5 (lg breakpoint)
Menu/List itemləri:   gap-x-5
Footer links:         gap-x-5
```

### Marjinlər

```
Article arasında:     mb-10
Arrow iniş:           mt-20
Projects section:     mb-50
```

## Border Radiusu

```
--radius: 0.625rem (əsas radius)
--radius-sm: calc(0.625rem * 0.6)
--radius-md: calc(0.625rem * 0.8)
--radius-lg: 0.625rem
--radius-xl: calc(0.625rem * 1.4)

Komponentlər: rounded-none (radius yoxdur)
```

## Düymə Stilleri

### Button Variants

```
1. outline (Əsas istifadə)
   - Border: border-border
   - Background: bg-background
   - Hover: bg-muted, text-foreground
   - Dark: border-input, bg-input/30, dark:hover:bg-input/50

2. default
   - Background: bg-primary, text-primary-foreground
   - Hover: bg-primary/80

3. ghost
   - Hover: bg-muted, text-foreground
   - Dark: dark:hover:bg-muted/50

4. link
   - Color: text-primary
   - Hover: underline
   - Underline Offset: underline-offset-4
```

### Button Sizes

```
lg (Əsas istifadə):
  - Height: h-9
  - Padding: px-2.5
  - Gap: gap-1.5
  - SVG: size-4
```

### Button Hover Efektləri

```
- Translation: hover:-translate-y-1 (yuxarıya 1px sürüşmə)
- Shadow: hover:shadow-lg (böyük kölgə)
- Transition: duration-200 ease-in-out
```

## Kart Komponenti (Card)

### Card Wrapper

```
Background: bg-transparent
Border: border-border, ring-1 ring-foreground/10
Padding: px-4, py-2
Border Radius: rounded-none
```

### Card Header

```
Padding: px-4
Grid: auto-rows-min
Gap: gap-1
```

### Card Title

```
Font Size: text-lg, font-medium
Color: text-olive-500 (başlıq rəngi)
```

### Card Content

```
Padding: px-4
Text Color: text-neutral-700
Text Size: text-[1rem]
```

### Card Footer

```
Border Top: border-t
Padding: p-4
Flex: flex items-center
Gap: gap-x-5
Align: justify-end
```

### Card Hover Efektləri

```
- Background: hover:bg-muted (açıq rəng)
- Translation: hover:-translate-y-1 (yuxarıya 1px)
- Shadow: hover:shadow-lg (böyük kölgə)
- Transition: transition-all duration-200 ease-in-out
```

## Vurğu Efektləri

### Highlight Effect (h1 Başlıqlar)

```html
<span
  class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-x-2 before:-skew-y-2 before:bg-olive-200"
>
  <span class="relative text-olive-500">Mətin</span>
</span>
```

- Background: bg-olive-200
- Text: text-olive-500
- Skew: -skew-x-2, -skew-y-2
- Position: relative inline-block

## Animasiyalar

### Arrow Down Animation

```
Animation: animate-bounce
Color: text-olive-500
```

### Transition Values

```
Əsas transition: transition-all
Duration: duration-200
Timing: ease-in-out
```

## Responsive Breakpoints

```
Mobile First:
- Base: Single column layout, gap-y-5

lg (Large screens 1024px+):
- Card Layout: flex-row, gap-x-5
- Card Width: lg:w-95 (yaklaşık 380px)
- Full width: w-full
```

## Komponentin Layout

### Səhifə Struktur

```
1. Hero Section (h-dvh - tam ekran yüksəkliyi)
   - Center aligned content
   - Background SVG pattern (bg-[url()])

2. Location Component
   - Static positioned

3. Main Article
   - Flex column, items-center

4. Buttons Section
   - Flex row, gap-x-5
   - outline variant, lg size

5. Arrow Down
   - Animation: bounce
   - Centered

6. Projects Section
   - Projects Grid
   - Cards layout
```

## Konteyner

```
container mx-auto px-4
- Max width: auto (full container)
- Horizontal padding: px-4 (1rem)
- Center aligned: mx-auto
```

## Badge Komponenti

Başlıqlar və layihə etiketləri üçün istifadə edilir.

## SVG İkonlar

Lucide React ikonları:

- `ArrowDown`: animate-bounce, text-olive-500
- `Pin`: Location component

## Dark Mode

Tünd rejim otomatik tətbiq olunur CSS dəyişkənləri vasitəsilə:

```css
.dark {
  --background: oklch(0.153 0.006 107.1);
  --foreground: oklch(0.988 0.003 106.5);
  /* ... digər dəyişkənlər ... */
}
```

---

**Son Yeniləmə:** 2026 Mayıs
**Font:** JetBrains Mono Variable
**CSS Framework:** Tailwind CSS + shadcn/ui
