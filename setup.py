import setuptools

setuptools.setup(
    name="dsv_data_science",
    version="0.1.0",
    author="Daikin U.S. Corporation",
    author_email="josiah.johnston@dsv.daikin.com",
    description="Assortment of python-based data science tools in a microservice.",
    packages=setuptools.find_packages(include=[
        "dsv_data_science", 
        "dsv_data_science.*"
    ]),
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
