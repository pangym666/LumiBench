# LumiBench Project Page

Static, dependency-free project page for **LumiBench: Benchmarking Illumination Robustness in Robotic Manipulation Policies**.

The information architecture follows the same project-page rhythm as DreamTrajectory: hero → abstract/motivation → method/benchmark → results → qualitative/real-world evidence → citation. The visual identity is adapted to LumiBench using the brown/teal palette already present in the manuscript overview figure.

## Run locally

```bash
cd LumiBench_project_page
python -m http.server 8000
# open http://localhost:8000
```

No npm/build step is required.

## Deploy to GitHub Pages

1. Create a repository, for example `LumiBench`.
2. Copy everything in this folder to the repository root.
3. Push to the default branch.
4. In **Settings → Pages**, choose **Deploy from a branch** and select the repository root.

The site uses only relative paths, so it works under either `username.github.io/LumiBench/` or a custom domain.

## Before public release

The supplied manuscript is anonymized, so the current page intentionally omits authors and does **not** fabricate a BibTeX entry. Before public release:

- add the author / affiliation block under the hero subtitle in `index.html`;
- replace `assets/LumiBench.pdf` with the public manuscript if desired;
- activate the code / benchmark buttons with real URLs;
- replace the Citation placeholder with the public BibTeX;
- optionally add an overview video (there is no empty video placeholder in the visible page).

## Assets

- `overview.webp`: benchmark overview / Fig. 1 source image.
- `conditions/*.webp`: cropped simulated illumination conditions from the overview figure.
- `realworld/*.webp`: cropped physical lighting examples from the overview figure.
- `robustness_overview.webp`: illumination difficulty + policy sensitivity figure.
- `severity_curves.webp`: severity-response figure cropped from the manuscript.
- `trajectory_base_vs_disco.webp`: Adjust Bottle Base vs Disco trajectory comparison.
- `LumiBench.pdf`: current manuscript.

All paper-derived content and values on the page are grounded in the supplied manuscript.
