import math
import os

ellipses = []
for i in range(18):
    y = 30 + i * 8.5
    t = abs((y - 105) / 75.0)
    rx = 40 + t * 40
    ry = 10 + t * 10
    ellipses.append(f'<ellipse cx="100" cy="{y:.2f}" rx="{rx:.2f}" ry="{ry:.2f}" />')

lines = []
for i in range(36):
    angle = (i / 36.0) * math.pi * 2
    x1 = 100 + math.cos(angle) * 80
    y1 = 30
    x2 = 100 + math.cos(angle + math.pi / 1.5) * 80
    y2 = 180
    lines.append(f'<line x1="{x1:.2f}" y1="{y1}" x2="{x2:.2f}" y2="{y2}" />')

# Let's shift the emblem so it centers around (0,0) locally for easier placement.
# Original bounds: x from ~20 to 180, y from ~20 to ~190.
# The center is roughly (100, 105).
# I'll keep the original coordinates and just wrap it in a <g transform="...">

ellipses_str = "\n".join(ellipses)
lines_str = "\n".join(lines)

def make_emblem(theme):
    if theme == 'dark':
        # gradient for dark background
        grad = """
        <linearGradient id="hyperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#991b1b" />
            <stop offset="50%" stop-color="#dc2626" />
            <stop offset="100%" stop-color="#b91c1c" />
        </linearGradient>
        """
        stroke = "url(#hyperGrad)"
        filter_str = '<filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
        opacity = "0.9"
    else:
        # gradient for light background
        grad = """
        <linearGradient id="hyperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7f1d1d" />
            <stop offset="50%" stop-color="#991b1b" />
            <stop offset="100%" stop-color="#7f1d1d" />
        </linearGradient>
        """
        stroke = "url(#hyperGrad)"
        filter_str = ''
        opacity = "0.9"

    emblem = f"""
    <defs>
        {grad}
        {filter_str}
    </defs>
    <g transform="translate(-100, -105)" stroke="{stroke}" fill="none" opacity="{opacity}" filter="{('url(#glow)' if theme=='dark' else '')}">
        <g stroke-width="1.2">
            {ellipses_str}
        </g>
        <g stroke-width="1.8">
            {lines_str}
        </g>
    </g>
    """
    return emblem

def generate_svg(layout, theme):
    emblem = make_emblem(theme)
    
    bg_fill = "transparent" # Or could be actual color if needed, but transparent is better for logos.
    
    if theme == 'dark':
        text_color = "#ffffff"
        sub_color = "#9ca3af"
    else:
        text_color = "#111827"
        sub_color = "#4b5563"

    if layout == 'square':
        width, height = 400, 400
        # Emblem center at (200, 160)
        emblem_g = f'<g transform="translate(200, 160) scale(1.2)">{emblem}</g>'
        text_g = f"""
        <text x="200" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" fill="{text_color}" text-anchor="middle" letter-spacing="4">HYPERBOLOID</text>
        <text x="200" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="{sub_color}" text-anchor="middle" letter-spacing="3">DIGITAL HUMAN RIGHTS</text>
        """
    else:
        width, height = 800, 240
        # Emblem center at (160, 120)
        emblem_g = f'<g transform="translate(160, 120) scale(1)">{emblem}</g>'
        text_g = f"""
        <text x="320" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="{text_color}" text-anchor="start" letter-spacing="6">HYPERBOLOID</text>
        <text x="325" y="170" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="{sub_color}" text-anchor="start" letter-spacing="4">DIGITAL HUMAN RIGHTS</text>
        """

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
    <rect width="100%" height="100%" fill="{bg_fill}"/>
    {emblem_g}
    {text_g}
</svg>"""
    return svg

public_dir = '/var/hyperboloid/public'
if not os.path.exists(public_dir):
    os.makedirs(public_dir)

with open(f'{public_dir}/logo-square-dark.svg', 'w') as f:
    f.write(generate_svg('square', 'dark'))

with open(f'{public_dir}/logo-square-light.svg', 'w') as f:
    f.write(generate_svg('square', 'light'))

with open(f'{public_dir}/logo-rect-dark.svg', 'w') as f:
    f.write(generate_svg('rect', 'dark'))

with open(f'{public_dir}/logo-rect-light.svg', 'w') as f:
    f.write(generate_svg('rect', 'light'))

print("Generated 4 SVG logos.")
