export function parseInlineStyle(styleString: string): React.CSSProperties {
    return styleString
        .split(';')
        .filter(Boolean)
        .reduce((acc: any, rule) => {
            const [key, value] = rule.split(':').map(s => s.trim());
            if (key && value) {
                const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
                acc[camelKey] = value;
            }
            return acc;
        }, {});
}
