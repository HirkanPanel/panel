"""Regenerate the source offered by the Hirkan dashboard footer."""
from pathlib import Path
import os
import re
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
out = root / 'dashboard/public/statics/hirkan-source.zip'
excluded = {'.git', '.venv', 'venv', 'node_modules', '__pycache__', '.pytest_cache', '.ruff_cache', '.mypy_cache', 'build', 'data', 'artifacts', 'certs', 'generated'}
database = re.compile(r'\.(?:db|sqlite|sqlite3)(?:-(?:wal|shm|journal))?$', re.I)
out.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(out, 'w', ZIP_DEFLATED) as z:
    for directory, dirs, files in os.walk(root):
        dirs[:] = sorted(d for d in dirs if d not in excluded)
        for name in sorted(files):
            p = Path(directory) / name
            rel = p.relative_to(root)
            if p == out or p.is_symlink() or name == '.env' or (name.startswith('.env.') and name != '.env.example'):
                continue
            if database.search(name) or p.suffix in {'.log', '.pyc', '.pem', '.key', '.crt'}:
                continue
            z.write(p, Path('hirkan') / rel)
print(out)
