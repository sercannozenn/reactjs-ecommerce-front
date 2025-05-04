import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnnouncementService } from '../api/services/AnnouncementService';
import { Announcement } from '../types/Announcement';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

dayjs.locale('tr');

function AnnouncementDetail() {
    const { id } = useParams<{ id: string }>();
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);

    useEffect(() => {
        if (id) {
            AnnouncementService.getById(Number(id))
                .then(setAnnouncement)
                .catch(() => alert('Duyuru getirilemedi.'));
        }
    }, [id]);

    if (!announcement) return <div className="text-center mt-5">Yükleniyor...</div>;

    return (
        <div className="container my-5">
            {/* Header görseli */}
            {announcement.image_url && (
                <div className="mb-4">
                    <div className="position-relative rounded overflow-hidden" style={{ maxHeight: '400px' }}>
                        <img
                            src={announcement.image_url}
                            alt={announcement.title}
                            className="w-100 img-fluid object-fit-cover"
                            style={{ objectFit: 'cover', height: '100%', width: '100%', minHeight: '400px', maxHeight: '600px'  }}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25" />
                    </div>
                </div>

            )}

            {/* İçerik kutusu */}
            <div className="bg-white shadow rounded p-4 p-lg-5">
                <h1 className="fw-bold mb-3">{announcement.title}</h1>
                <small className="mb-3" dangerouslySetInnerHTML={{ __html: announcement.short_description }}></small>
                <div className="text-muted mb-3">
                    Yayın Tarihi: <strong>{dayjs(announcement.date).format('D MMMM YYYY')}</strong>
                </div>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: announcement.description }} />
            </div>
        </div>
    );
}

export default AnnouncementDetail;
