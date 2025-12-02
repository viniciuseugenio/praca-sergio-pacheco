from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    day = models.DateField()
    time = models.TimeField()
    end_time = models.TimeField(
        null=True, blank=True, help_text="An estimated ending time (optional)."
    )
    address = models.CharField(max_length=200)
    capacity = models.CharField(max_length=100)

    class Meta:
        ordering = ["day", "time"]
        verbose_name = "Evento"
        verbose_name_plural = "Eventos"

    def __str__(self):
        day_str = self.day.isoformat()
        start_str = self.time.strftime("%H:%M")
        return f"{self.title} - {day_str} {start_str}"


class NatureElement(models.Model):
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=150)
    description = models.TextField(max_length=500)
    type = models.CharField(max_length=50)
    image = models.ImageField(upload_to='nature_elements/', blank=True, null=True)

    class Meta:
        ordering = ["name"]
        verbose_name = "Elemento da Natureza"
        verbose_name_plural = "Elementos da Natureza"

    def __str__(self):
        return f"{self.name} ({self.scientific_name})"
