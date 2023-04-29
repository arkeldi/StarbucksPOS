from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.schemas import get_schema_view
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

admin.site.site_header = "Project Header"
admin.site.site_title = "Project Title"
admin.site.index_title = "Welcome Message"

schema_url_patterns = []

schema_view = get_schema_view(
    title="API Title",
    url="https://www.example.com/",
    patterns=schema_url_patterns,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"
    ),  # Landing Page for API
    path(
        "api/v1/schema/redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
    # YOUR PATTERNS
    path("api/v1/schema/", SpectacularAPIView.as_view(), name="schema"),  # schema
    path(
        "api/v1/schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path("api/v1/accounts/", include("accounts.urls")),
    path("api/", include("calendar_app.urls")),  # Include calendar_app URLs
    path("api/v1/weather/", include("weather_api.urls")),  # Include weather_api URLs
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

