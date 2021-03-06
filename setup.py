from setuptools import setup, find_packages


__version__ = "0.0.1"


setup(
    name="wakalarealtor",
    version=__version__,
    description="A blog for WakalaRealtor",
    author="Brian K. Bett",
    author_email="bettblake08@hotmail.com",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "Flask>=1.0.2",
        "Flask-Webpack>=0.0.7",
        "Flask-JWT-Extended>=3.12.1",
        "Flask-RESTful>=0.3.6",
        "Flask-SQLAlchemy>=2.3.2",
        "Pillow>=5.2.0",
        "pytest>=3.7.4",
        "coveralls",
        "pytest-cov>=2.6.0"
    ]
)
