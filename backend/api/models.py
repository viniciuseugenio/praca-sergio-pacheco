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
        start_str = self.time.stfrtime("%H:%M")
        return f"{self.title} - {day_str} {start_str}"
