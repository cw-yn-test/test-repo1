import setuptools

setuptools.setup(
    name="dsv_data_science",
    version="0.1.0",
    author="Daikin U.S. Corporation",
    python_requires='>=3.6',
    license='Unlicensed',
    install_requires=[
        'cachetools',
        'colorcet',
        'joblib',
        'matplotlib',
        'numpy',
        'scipy',
        'uvicorn',
    ],
    extras_require = {
        'dev_cli': ["IPython"]
    },
)
